#!/usr/bin/env python3
"""Create a new article page and its image folder.

Usage:  python3 scripts/new_article.py my-article-slug

Then write the article, drop images in images/dj-pics/my-article-slug/, and run
`python3 scripts/build_articles.py` to publish it to the DJ Archive and author pages.
"""

import html
import sys
from datetime import date
from pathlib import Path

from build_articles import ROOT, long_date, semester_for

SPORTS_HINT = "Basketball, Football, Baseball, Soccer, Hockey, Tennis, Formula 1, Volleyball, Cricket, ..."


def ask(prompt, default=""):
    suffix = f" [{default}]" if default else ""
    return input(f"{prompt}{suffix}: ").strip() or default


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    slug = sys.argv[1]
    article_path = ROOT / "articles" / f"{slug}.html"
    image_dir = ROOT / "images" / "dj-pics" / slug
    if article_path.exists():
        sys.exit(f"{article_path.relative_to(ROOT)} already exists.")

    title = ask("Title")
    authors = ask("Author(s), comma-separated")
    sports = ask(f"Sport(s), comma-separated ({SPORTS_HINT})")
    published = date.fromisoformat(ask("Publish date (YYYY-MM-DD)", date.today().isoformat()))
    semester = ask("Semester", semester_for(published))

    esc = lambda value: html.escape(value, quote=True)

    article_path.write_text(
        f"""<!DOCTYPE HTML>
<!--
  ZeroFour by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
  <head>
    <title>{esc(title)} | Sports Analytics Group at Berkeley</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="../assets/css/main.css" />
    <meta name="sagb:authors" content="{esc(authors)}">
    <meta name="sagb:date" content="{published.isoformat()}">
    <meta name="sagb:semester" content="{esc(semester)}">
    <meta name="sagb:sports" content="{esc(sports)}">
    <meta name="sagb:image" content="../images/dj-pics/{slug}/main.jpg">
    <script src="../shared/articles-data.js"></script>
  </head>
  <body class="right-sidebar is-preload">
    <div id="page-wrapper">

      <!-- Header Wrapper -->
        <div id="header-wrapper">
          <div class="container">

            <!-- Header -->
              <header id="header">
                <div class="inner">

                  <!-- Logo -->
                    <h1><a href="../index.html" id="logo"><img src="../images/logos_2026/bear_white.png" /></a></h1>

                  <!-- Nav -->
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
                <div class="row">
                  <div class="col-8 col-12-medium">
                    <div id="content">

                      <!-- Content -->

                        <article>
                          <header class="major">
                            <h2>{esc(title)}</h2>
                            <h4 class="byline">By {esc(authors)} | {long_date(published)}</h4>
                          </header>
                          <span class="image featured"><img src="../images/dj-pics/{slug}/main.jpg" alt="" /></span>
                          <p>*Article goes here*</p>
                        </article>

                    </div>
                  </div>
                  <div class="col-4 col-12-medium">
                    <div id="sidebar">

                      <!-- Sidebar -->

                        <section>
                          <header class="major">
                            <h2>Related Articles</h2>
                          </header>
                          <ul id="recent-articles" class="style2">
                          </ul>
                          <script id="recent-articles-src" src="../shared/recent-articles.js"></script>
                        </section>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper style3">
            <div class="inner">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <!-- Article list -->
                    <section id="featured-articles" class="box article-list">
                    </section>
                    <script id="featured-article-src" src="../shared/featured-articles.js"></script>
                  </div>
                </div>
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
""",
        encoding="utf-8",
    )
    image_dir.mkdir(parents=True, exist_ok=True)

    print(f"Created {article_path.relative_to(ROOT)} and {image_dir.relative_to(ROOT)}/")
    print("When the article is ready, run: python3 scripts/build_articles.py")


if __name__ == "__main__":
    main()
