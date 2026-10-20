#!/usr/bin/env python3
"""Rebuild everything that is derived from article metadata.

Usage (from anywhere):  python3 scripts/build_articles.py

Every page in articles/ declares its info with meta tags in <head>:

    <meta name="sagb:authors" content="Jane Doe, John Smith">
    <meta name="sagb:date" content="2026-01-09">
    <meta name="sagb:semester" content="Fall 2025">
    <meta name="sagb:sports" content="Basketball">
    <meta name="sagb:image" content="../images/dj-pics/my-article/main.jpg">
    <meta name="sagb:type" content="podcast">       (optional; "blog" is treated as "article")
    <meta name="sagb:listed" content="no">          (optional, keeps drafts/duplicates off listings)

From those, this script:
  - rewrites each article's byline (<h4 class="byline">) with links to author pages
  - rewrites each article's tag links (<div class="article-tags">)
  - writes shared/articles-data.js, which powers dj-archive.html and article sidebars
  - adds any new authors to authors/authors.csv (fill in their bios there)
  - regenerates authors/<author>.html and authors/index.html
  - writes shared/podcasts-data.js from podcasts/podcasts.json, which adds podcast
    episodes to dj-archive.html (each entry: spotify episode id, title, date,
    duration, sports, description, and optionally series and semester)
"""

import csv
import html
import json
import re
import sys
import unicodedata
from datetime import date
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "articles"
AUTHORS_DIR = ROOT / "authors"
AUTHORS_CSV = AUTHORS_DIR / "authors.csv"
AUTHOR_FIELDS = ("slug", "name", "role", "class_year", "email", "linkedin", "photo", "aliases", "bio")
DATA_JS = ROOT / "shared" / "articles-data.js"
PODCASTS_JSON = ROOT / "podcasts" / "podcasts.json"
PODCASTS_JS = ROOT / "shared" / "podcasts-data.js"
PODCAST_IMAGE = "images/podcasts/sagb-podcast.jpg"
FALLBACK_IMAGE = "images/dj-main.png"
GENERATOR_TAG = '<meta name="generator" content="scripts/build_articles.py">'

SEASON_ORDER = {"Spring": 1, "Summer": 2, "Fall": 3}

META_RE = re.compile(r'<meta\s+name="sagb:(\w+)"\s+content="([^"]*)"\s*/?>')
TITLE_RE = re.compile(r'<header class="major">.*?<h2[^>]*>(.*?)</h2>', re.S)
BYLINE_RE = re.compile(r'<h4 class="byline">.*?</h4>', re.S)
TAGS_RE = re.compile(r'\s*<div class="article-tags">.*?</div>', re.S)
HEADER_END_RE = re.compile(r'<header class="major">.*?</header>', re.S)
PARAGRAPH_RE = re.compile(r"<p[^>]*>(.*?)</p>", re.S)
TAG_STRIP_RE = re.compile(r"<[^>]+>")


def slugify(name):
    ascii_name = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", ascii_name.lower()).strip("-")


def plain_text(fragment):
    text = html.unescape(TAG_STRIP_RE.sub(" ", fragment))
    return re.sub(r"\s+", " ", text).strip()


def semester_for(d):
    """Articles published in early January belong to the fall semester before."""
    if d.month == 1 and d.day <= 20:
        return f"Fall {d.year - 1}"
    if d.month <= 6:
        return f"Spring {d.year}"
    if d.month <= 8:
        return f"Summer {d.year}"
    return f"Fall {d.year}"


def semester_sort_key(semester):
    season, _, year = semester.partition(" ")
    return (int(year) if year.isdigit() else 0, SEASON_ORDER.get(season, 0))


def split_list(value):
    return [part.strip() for part in value.split(",") if part.strip()]


def long_date(d):
    return f"{d:%B} {d.day}, {d.year}"


def short_date(d):
    return f"{d:%b} {d.day}, {d.year}"


def excerpt_from(text, limit=220):
    header = HEADER_END_RE.search(text)
    start = header.end() if header else 0
    end = text.find("</article>", start)
    body = text[start:end if end != -1 else len(text)]
    for match in PARAGRAPH_RE.finditer(body):
        para = plain_text(match.group(1))
        if len(para) < 60:
            continue
        if len(para) <= limit:
            return para
        return para[:limit].rsplit(" ", 1)[0].rstrip(",.;:") + "…"
    return ""


def join_names(parts):
    if len(parts) <= 2:
        return " &amp; ".join(parts)
    return ", ".join(parts[:-1]) + " &amp; " + parts[-1]


class AuthorRegistry:
    def __init__(self, path):
        self.path = path
        self.data = {}
        self.alias_to_slug = {}
        if path.exists():
            with path.open(encoding="utf-8", newline="") as handle:
                for row in csv.DictReader(handle):
                    slug = (row.get("slug") or "").strip()
                    if not slug:
                        continue
                    aliases = [part.strip() for part in (row.get("aliases") or "").split("|") if part.strip()]
                    self.data[slug] = {
                        "name": (row.get("name") or slug).strip(),
                        "role": (row.get("role") or "").strip(),
                        "class_year": (row.get("class_year") or "").strip(),
                        "email": (row.get("email") or "").strip(),
                        "linkedin": (row.get("linkedin") or "").strip(),
                        "photo": (row.get("photo") or "").strip(),
                        "bio": (row.get("bio") or "").strip(),
                        "aliases": aliases,
                    }
        for slug, info in self.data.items():
            self.alias_to_slug[info["name"].lower()] = slug
            for alias in info.get("aliases", []):
                self.alias_to_slug[alias.lower()] = slug

    def resolve(self, name):
        """Return the author slug for a byline name, registering new authors."""
        slug = self.alias_to_slug.get(name.lower())
        if slug:
            return slug
        slug = slugify(name)
        if slug not in self.data:
            self.data[slug] = {
                "name": name,
                "role": "",
                "class_year": "",
                "email": "",
                "linkedin": "",
                "photo": "",
                "bio": "",
                "aliases": [],
            }
            print(f"  new author added to authors.csv: {name}")
        self.alias_to_slug[name.lower()] = slug
        return slug

    def save(self):
        with self.path.open("w", encoding="utf-8", newline="") as handle:
            writer = csv.DictWriter(handle, fieldnames=AUTHOR_FIELDS, lineterminator="\n")
            writer.writeheader()
            for slug in sorted(self.data):
                info = self.data[slug]
                writer.writerow({
                    "slug": slug,
                    "name": info.get("name", ""),
                    "role": info.get("role", ""),
                    "class_year": info.get("class_year", ""),
                    "email": info.get("email", ""),
                    "linkedin": info.get("linkedin", ""),
                    "photo": info.get("photo", ""),
                    "aliases": " | ".join(info.get("aliases") or []),
                    "bio": info.get("bio", ""),
                })


def load_article(path, authors):
    text = path.read_text(encoding="utf-8")
    meta = dict(META_RE.findall(text))
    problems = [key for key in ("authors", "date", "sports") if not meta.get(key)]
    title_match = TITLE_RE.search(text)
    if not title_match:
        problems.append("title (<header class=\"major\"><h2>)")
    if not BYLINE_RE.search(text):
        problems.append('byline (<h4 class="byline">)')
    if problems:
        print(f"  SKIPPED {path.relative_to(ROOT)}: missing {', '.join(problems)}")
        return None, text

    published = date.fromisoformat(meta["date"])
    author_names = split_list(meta["authors"])
    image = meta.get("image", "")
    image = image[3:] if image.startswith("../") else (image or FALLBACK_IMAGE)
    article = {
        "slug": path.stem,
        "url": f"articles/{path.name}",
        "title": plain_text(title_match.group(1)),
        "authors": [{"name": authors.data[s]["name"], "slug": s} for s in map(authors.resolve, author_names)],
        "date": published.isoformat(),
        "dateLabel": short_date(published),
        "semester": meta.get("semester") or semester_for(published),
        "sports": split_list(meta["sports"]),
        "type": "article" if meta.get("type", "article") in ("", "article", "blog") else meta["type"],
        "image": image,
        "excerpt": excerpt_from(text),
        "listed": meta.get("listed", "yes").lower() != "no",
    }
    return article, text


def render_byline(article):
    links = [
        f'<a href="../authors/{a["slug"]}.html">{html.escape(a["name"])}</a>' for a in article["authors"]
    ]
    published = date.fromisoformat(article["date"])
    return f'<h4 class="byline">By {join_names(links)} | {long_date(published)}</h4>'


def render_tags(article):
    tags = [
        f'<a class="tag" href="../dj-archive.html?sport={quote(s)}">{html.escape(s)}</a>' for s in article["sports"]
    ]
    tags.append(
        f'<a class="tag tag-semester" href="../dj-archive.html?semester={quote(article["semester"])}">'
        f'{html.escape(article["semester"])}</a>'
    )
    if article["type"] == "podcast":
        tags.append('<a class="tag tag-type" href="../dj-archive.html?type=podcast">Podcast</a>')
    return '<div class="article-tags">' + "".join(tags) + "</div>"


def update_article_html(text, article):
    byline_match = BYLINE_RE.search(text)
    indent = re.search(r"[ \t]*$", text[: byline_match.start()]).group(0)
    text = BYLINE_RE.sub(lambda _: render_byline(article), text, count=1)
    text = TAGS_RE.sub("", text, count=1)
    byline_end = BYLINE_RE.search(text).end()
    return text[:byline_end] + "\n" + indent + render_tags(article) + text[byline_end:]


def card_html(article, prefix):
    """Static version of the card rendered by assets/js/articles.js."""
    url = prefix + article["url"]
    tags = "".join(
        f'<a class="tag" href="{prefix}dj-archive.html?sport={quote(s)}">{html.escape(s)}</a>' for s in article["sports"]
    )
    tags += (
        f'<a class="tag tag-semester" href="{prefix}dj-archive.html?semester={quote(article["semester"])}">'
        f'{html.escape(article["semester"])}</a>'
    )
    if article["type"] == "podcast":
        tags += f'<a class="tag tag-type" href="{prefix}dj-archive.html?type=podcast">Podcast</a>'
    names = join_names(
        [f'<a href="{prefix}authors/{a["slug"]}.html">{html.escape(a["name"])}</a>' for a in article["authors"]]
    )
    return f"""        <article class="article-card">
          <a class="article-card-image" href="{url}"><img loading="lazy" src="{prefix}{html.escape(article["image"])}" alt=""></a>
          <div class="article-card-body">
            <div class="article-card-tags">{tags}</div>
            <h3 class="article-card-title"><a href="{url}">{html.escape(article["title"])}</a></h3>
            <p class="article-card-meta">{names} · {article["dateLabel"]}</p>
            <p class="article-card-excerpt">{html.escape(article["excerpt"])}</p>
          </div>
        </article>"""


def page_html(title, body, body_class="no-sidebar"):
    return f"""<!DOCTYPE HTML>
<!-- Generated by scripts/build_articles.py. Edit authors/authors.csv instead of this file. -->
<html>
  <head>
    <link href="../images/logos_2026/bear_white.png" rel="icon" type="image/x-icon"/>
    <title>{html.escape(title)} | Sports Analytics Group at Berkeley</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    {GENERATOR_TAG}
    <link rel="stylesheet" href="../assets/css/main.css" />
  </head>
  <body class="{body_class} is-preload">
    <div id="page-wrapper">

      <!-- Header Wrapper -->
        <div id="header-wrapper">
          <div class="container">
              <header id="header">
                <div class="inner">
                    <h1><a href="../index.html" id="logo"><img src="../images/logos_2026/bear_white.png" /></a></h1>
                    <nav id="nav">
                    </nav>
                    <script id="nav-src" curr="dj-archive" folder="up" src="../shared/nav.js"></script>
                </div>
              </header>
          </div>
        </div>

      <!-- Main Wrapper -->
        <div id="main-wrapper">
          <div class="wrapper style2">
            <div class="inner">
              <div class="container">
{body}
              </div>
            </div>
          </div>
        </div>

      <!-- Footer Wrapper -->
      <div id="footer-wrapper">
      </div>
      <script id="footer-src" folder="up" src="../shared/footer.js"></script>

    </div>

    <!-- Scripts -->
      <script src="../assets/js/jquery.min.js"></script>
      <script src="../assets/js/jquery.dropotron.min.js"></script>
      <script src="../assets/js/browser.min.js"></script>
      <script src="../assets/js/breakpoints.min.js"></script>
      <script src="../assets/js/util.js"></script>
      <script src="../assets/js/main.js"></script>
  </body>
</html>
"""


def author_page(slug, info, articles):
    photo = (
        f'<img class="author-photo" src="../{html.escape(info["photo"])}" alt="{html.escape(info["name"])}">'
        if info.get("photo")
        else f'<div class="author-photo author-photo-placeholder">{html.escape(initials(info["name"]))}</div>'
    )
    class_year = (
        f'<p class="author-class">Class of {html.escape(info["class_year"])}</p>'
        if info.get("class_year")
        else ""
    )
    roles = [part.strip() for part in (info.get("role") or "").split("|") if part.strip()]
    role = "".join(f'<p class="author-role">{html.escape(part)}</p>' for part in roles)
    bio = html.escape(info["bio"]) if info.get("bio") else "Bio coming soon."
    contacts = []
    if info.get("linkedin"):
        contacts.append(
            f'<a class="author-link" href="{html.escape(info["linkedin"])}" target="_blank" rel="noopener noreferrer">'
            f'<i class="fa fa-linkedin"></i> LinkedIn</a>'
        )
    if info.get("email"):
        email = info["email"]
        contacts.append(
            f'<a class="author-link" href="mailto:{html.escape(email, quote=True)}">'
            f'<i class="fa fa-envelope"></i> {html.escape(email)}</a>'
        )
    contact_links = f'<p class="author-links">{"".join(contacts)}</p>' if contacts else ""
    sports = sorted({s for a in articles for s in a["sports"]})
    stats = " · ".join([f'{len(articles)} article{"s" if len(articles) != 1 else ""}'] + ([", ".join(sports)] if sports else []))
    cards = "\n".join(card_html(a, "../") for a in articles)
    body = f"""                <p class="author-breadcrumb"><a href="index.html">All writers</a></p>
                <section class="author-profile">
                  {photo}
                  <div class="author-details">
                    <h2 class="author-name">{html.escape(info["name"])}</h2>
                    {class_year}
                    {role}
                    <p class="author-bio">{bio}</p>
                    <p class="author-stats">{html.escape(stats)}</p>
                    {contact_links}
                  </div>
                </section>
                <h3 class="author-articles-heading">Articles by {html.escape(info["name"])}</h3>
                <div class="article-grid">
{cards}
                </div>"""
    return page_html(info["name"], body)


def initials(name):
    return "".join(part[0] for part in name.split()[:2]).upper()


def authors_index_page(authors, by_author):
    tiles = []
    for slug in sorted(by_author, key=lambda s: authors.data[s]["name"].split()[-1].lower()):
        info = authors.data[slug]
        n = len(by_author[slug])
        tiles.append(
            f'                  <a class="author-tile" href="{slug}.html">'
            f'<span class="author-tile-name">{html.escape(info["name"])}</span>'
            f'<span class="author-tile-count">{n} article{"s" if n != 1 else ""}</span></a>'
        )
    body = f"""                <div class="articles-hero">
                  <h2 class="articles-hero-title">Our Writers</h2>
                  <p class="articles-hero-subtitle">Everyone who has written for SAGB. <a href="../dj-archive.html">Browse the DJ Archive</a></p>
                </div>
                <div class="author-grid">
{chr(10).join(tiles)}
                </div>"""
    return page_html("Our Writers", body)


def load_podcasts():
    if not PODCASTS_JSON.exists():
        return []
    podcasts = []
    for entry in json.loads(PODCASTS_JSON.read_text(encoding="utf-8")):
        published = date.fromisoformat(entry["date"])
        podcasts.append({
            "slug": "podcast-" + entry["spotify"],
            "url": "https://open.spotify.com/episode/" + entry["spotify"],
            "title": entry["title"],
            "series": entry.get("series", "SAGB Podcast"),
            "duration": entry.get("duration", ""),
            "date": published.isoformat(),
            "dateLabel": short_date(published),
            "semester": entry.get("semester") or semester_for(published),
            "sports": entry["sports"],
            "type": "podcast",
            "image": entry.get("image", PODCAST_IMAGE),
            "excerpt": entry.get("description", ""),
        })
    podcasts.sort(key=lambda p: (p["date"], p["title"]), reverse=True)
    return podcasts


def write_if_changed(path, content):
    if path.exists() and path.read_text(encoding="utf-8") == content:
        return False
    path.write_text(content, encoding="utf-8")
    return True


def main():
    authors = AuthorRegistry(AUTHORS_CSV)
    articles = []
    bylined = set()
    changed = 0
    for path in sorted(ARTICLES_DIR.glob("*.html")):
        article, text = load_article(path, authors)
        if not article:
            continue
        if write_if_changed(path, update_article_html(text, article)):
            changed += 1
        bylined.update(a["slug"] for a in article["authors"])
        if article.pop("listed"):
            articles.append(article)

    articles.sort(key=lambda a: (a["date"], a["title"]), reverse=True)
    data = "window.SAGB_ARTICLES = [\n" + ",\n".join(json.dumps(a, ensure_ascii=False) for a in articles) + "\n];\n"
    write_if_changed(DATA_JS, "// Generated by scripts/build_articles.py. Do not edit by hand.\n" + data)

    podcasts = load_podcasts()
    podcast_data = "window.SAGB_PODCASTS = [\n" + ",\n".join(json.dumps(p, ensure_ascii=False) for p in podcasts) + "\n];\n"
    write_if_changed(PODCASTS_JS, "// Generated by scripts/build_articles.py from podcasts/podcasts.json.\n" + podcast_data)

    by_author = {}
    for article in articles:
        for a in article["authors"]:
            by_author.setdefault(a["slug"], []).append(article)

    authors.save()
    for slug in bylined:
        write_if_changed(AUTHORS_DIR / f"{slug}.html", author_page(slug, authors.data[slug], by_author.get(slug, [])))
    write_if_changed(AUTHORS_DIR / "index.html", authors_index_page(authors, by_author))

    for page in AUTHORS_DIR.glob("*.html"):
        if page.stem != "index" and page.stem not in bylined and GENERATOR_TAG in page.read_text(encoding="utf-8"):
            page.unlink()
            print(f"  removed author page with no articles: {page.name}")

    semesters = sorted({a["semester"] for a in articles}, key=semester_sort_key, reverse=True)
    print(
        f"{len(articles)} articles, {len(podcasts)} podcasts, {len(by_author)} authors, "
        f"{len(semesters)} semesters; {changed} article files updated."
    )


if __name__ == "__main__":
    sys.exit(main())
