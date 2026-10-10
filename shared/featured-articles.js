/* "Featured Stories" box: the newest articles other than the one being read. */
(function () {
  const section = document.getElementById("featured-articles");
  const articles = window.SAGB_ARTICLES;
  if (!section || !articles) return;

  const el = document.getElementById("featured-article-src");
  const prefix = el && el.getAttribute("folder") === "down" ? "" : "../";
  const here = window.location.pathname.split("/").pop();
  const picks = articles.filter((a) => a.url.split("/").pop() !== here).slice(0, 4);

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  section.innerHTML =
    '<h2 class="icon fa-file-text-o">Featured Stories</h2>' +
    picks
      .map(
        (a) => `
<article class="box excerpt">
  <a class="image left" href="${prefix}${a.url}"><img alt="" src="${prefix}${escapeHtml(a.image)}"/></a>
  <div>
    <header>
      <span class="date">${a.dateLabel}</span>
      <h3><a href="${prefix}${a.url}">${escapeHtml(a.title)}</a></h3>
    </header>
    <p>${escapeHtml(a.excerpt)}</p>
  </div>
</article>`
      )
      .join("") +
    `<footer><a class="button alt icon fa-file-o" href="${prefix}dj-archive.html">View DJ Archive</a></footer>`;
})();
