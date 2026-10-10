#!/usr/bin/env python3
"""Put an article at the top of the "Spotlight" box on the Data Journalism page and every article.

Usage:  python3 scripts/update_spotlight_article.py my-article-slug

The oldest spotlight entry is dropped so the box keeps the same length.
Run scripts/build_articles.py first so the article's byline and data are up to date.
"""

import html
import json
import re
import sys
from datetime import date

from build_articles import DATA_JS, ROOT, join_names, long_date

SPOTLIGHT_RE = re.compile(r'(<section class="box spotlight">)(.*?)(</section>)', re.S)
ENTRY_RE = re.compile(r"\s*<article>.*?</article>", re.S)


def spotlight_entry(article, excerpt, prefix):
    url = prefix + article["url"]
    authors = join_names(
        [f'<a href="{prefix}authors/{a["slug"]}.html">{html.escape(a["name"])}</a>' for a in article["authors"]]
    )
    published = long_date(date.fromisoformat(article["date"]))
    return f"""
<article>
<a class="image featured" href="{url}"><img alt="" src="{prefix}{html.escape(article["image"])}"/></a>
<header>
<h3><a href="{url}">{html.escape(article["title"])}</a></h3>
<p>By {authors} | {published}</p>
</header>
<p>{html.escape(excerpt)}</p>
<footer>
<a class="button alt icon fa-file-o" href="{url}">Continue Reading</a>
</footer>
</article>"""


def update_page(path, entry):
    text = path.read_text(encoding="utf-8")
    match = SPOTLIGHT_RE.search(text)
    if not match:
        return False
    inner = match.group(2)
    entries = list(ENTRY_RE.finditer(inner))
    if not entries:
        return False
    first = entries[0]
    inner = inner[: first.start()] + entry + inner[first.start():]
    last = list(ENTRY_RE.finditer(inner))[-1]
    inner = inner[: last.start()] + inner[last.end():]
    path.write_text(text[: match.start(2)] + inner + text[match.end(2):], encoding="utf-8")
    return True


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    slug = sys.argv[1]
    data = DATA_JS.read_text(encoding="utf-8")
    articles = json.loads(data[data.index("["): data.rindex("]") + 1])
    article = next((a for a in articles if a["slug"] == slug), None)
    if not article:
        sys.exit(f"{slug} is not in shared/articles-data.js. Run scripts/build_articles.py first.")

    excerpt = input(f"Excerpt [{article['excerpt']}]: ").strip() or article["excerpt"]

    updated = int(update_page(ROOT / "data-journalism.html", spotlight_entry(article, excerpt, "")))
    article_entry = spotlight_entry(article, excerpt, "../")
    for path in sorted((ROOT / "articles").glob("*.html")):
        updated += update_page(path, article_entry)
    print(f"Updated the spotlight on {updated} pages.")


if __name__ == "__main__":
    main()
