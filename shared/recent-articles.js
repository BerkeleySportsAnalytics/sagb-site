/* "Related Articles" sidebar: newest articles sharing a sport with this one, topped up with the newest overall. */
(function () {
  const list = document.getElementById("recent-articles");
  const articles = window.SAGB_ARTICLES;
  if (!list || !articles) return;

  const el = document.getElementById("recent-articles-src");
  const prefix = el && el.getAttribute("folder") === "down" ? "" : "../";
  const LIMIT = 9;

  const here = window.location.pathname.split("/").pop();
  const sportsMeta = document.querySelector('meta[name="sagb:sports"]');
  const sports = sportsMeta ? sportsMeta.content.split(",").map((s) => s.trim()) : [];

  const others = articles.filter((a) => a.url.split("/").pop() !== here);
  const related = others.filter((a) => a.sports.some((s) => sports.includes(s))).slice(0, LIMIT);
  const picks = related.concat(others.filter((a) => !related.includes(a)).slice(0, LIMIT - related.length));

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  list.innerHTML = picks.map((a) => `<li><a href="${prefix}${a.url}">${escapeHtml(a.title)}</a></li>`).join("\n");
})();
