/* Gallery + filters for dj-archive.html. Data comes from shared/articles-data.js. */
(function () {
  const articles = window.SAGB_ARTICLES || [];
  const PAGE_SIZE = 24;
  const SEASON_ORDER = { Spring: 1, Summer: 2, Fall: 3 };

  const grid = document.getElementById("article-grid");
  const sportList = document.getElementById("sport-filters");
  const semesterSelect = document.getElementById("semester-filter");
  const searchInput = document.getElementById("search-filter");
  const countLabel = document.getElementById("articles-count");
  const clearButton = document.getElementById("articles-clear");
  const moreButton = document.getElementById("articles-more");
  const emptyMessage = document.getElementById("articles-empty");

  const params = new URLSearchParams(window.location.search);
  const state = {
    sport: params.get("sport") || "",
    semester: params.get("semester") || "",
    query: params.get("q") || "",
    shown: PAGE_SIZE,
  };

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const countBy = (getKeys) => {
    const counts = new Map();
    articles.forEach((a) => getKeys(a).forEach((k) => counts.set(k, (counts.get(k) || 0) + 1)));
    return counts;
  };

  const semesterKey = (semester) => {
    const [season, year] = semester.split(" ");
    return Number(year) * 10 + (SEASON_ORDER[season] || 0);
  };

  const sportCounts = countBy((a) => a.sports);
  const sports = [...sportCounts.keys()].sort((a, b) => sportCounts.get(b) - sportCounts.get(a) || a.localeCompare(b));
  const semesterCounts = countBy((a) => [a.semester]);
  const semesters = [...semesterCounts.keys()].sort((a, b) => semesterKey(b) - semesterKey(a));

  const joinNames = (parts) =>
    parts.length <= 2 ? parts.join(" &amp; ") : parts.slice(0, -1).join(", ") + " &amp; " + parts[parts.length - 1];

  const cardHtml = (a) => {
    const tags =
      a.sports.map((s) => `<a class="tag" href="?sport=${encodeURIComponent(s)}" data-sport="${escapeHtml(s)}">${escapeHtml(s)}</a>`).join("") +
      `<a class="tag tag-semester" href="?semester=${encodeURIComponent(a.semester)}" data-semester="${escapeHtml(a.semester)}">${escapeHtml(a.semester)}</a>` +
      (a.type === "blog" ? '<span class="tag tag-type">Blog</span>' : "");
    const names = joinNames(a.authors.map((p) => `<a href="authors/${p.slug}.html">${escapeHtml(p.name)}</a>`));
    return `<article class="article-card">
      <a class="article-card-image" href="${a.url}"><img loading="lazy" src="${escapeHtml(a.image)}" alt=""></a>
      <div class="article-card-body">
        <div class="article-card-tags">${tags}</div>
        <h3 class="article-card-title"><a href="${a.url}">${escapeHtml(a.title)}</a></h3>
        <p class="article-card-meta">${names} · ${a.dateLabel}</p>
        <p class="article-card-excerpt">${escapeHtml(a.excerpt)}</p>
      </div>
    </article>`;
  };

  const matches = (a) => {
    if (state.sport && !a.sports.includes(state.sport)) return false;
    if (state.semester && a.semester !== state.semester) return false;
    if (state.query) {
      const haystack = (a.title + " " + a.authors.map((p) => p.name).join(" ")).toLowerCase();
      if (!haystack.includes(state.query.toLowerCase())) return false;
    }
    return true;
  };

  const syncUrl = () => {
    const next = new URLSearchParams();
    if (state.sport) next.set("sport", state.sport);
    if (state.semester) next.set("semester", state.semester);
    if (state.query) next.set("q", state.query);
    const qs = next.toString();
    window.history.replaceState(null, "", window.location.pathname + (qs ? "?" + qs : ""));
  };

  const renderSportChips = () => {
    const chip = (value, label, count) =>
      `<button type="button" class="chip${state.sport === value ? " is-active" : ""}" data-sport="${escapeHtml(value)}">` +
      `${escapeHtml(label)}<span class="chip-count">${count}</span></button>`;
    sportList.innerHTML = chip("", "All", articles.length) + sports.map((s) => chip(s, s, sportCounts.get(s))).join("");
  };

  const renderSemesterOptions = () => {
    semesterSelect.innerHTML =
      '<option value="">All semesters</option>' +
      semesters.map((s) => `<option value="${escapeHtml(s)}">${escapeHtml(s)} (${semesterCounts.get(s)})</option>`).join("");
    semesterSelect.value = state.semester;
  };

  const render = () => {
    const results = articles.filter(matches);
    grid.innerHTML = results.slice(0, state.shown).map(cardHtml).join("");
    countLabel.textContent = `${results.length} article${results.length === 1 ? "" : "s"}`;
    emptyMessage.hidden = results.length > 0;
    moreButton.hidden = results.length <= state.shown;
    clearButton.hidden = !(state.sport || state.semester || state.query);
    renderSportChips();
    syncUrl();
  };

  const update = (changes) => {
    Object.assign(state, changes, { shown: PAGE_SIZE });
    render();
  };

  sportList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-sport]");
    if (button) update({ sport: button.dataset.sport });
  });

  grid.addEventListener("click", (event) => {
    const tag = event.target.closest("[data-sport], [data-semester]");
    if (!tag) return;
    event.preventDefault();
    if (tag.dataset.sport) update({ sport: tag.dataset.sport });
    if (tag.dataset.semester) {
      semesterSelect.value = tag.dataset.semester;
      update({ semester: tag.dataset.semester });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  semesterSelect.addEventListener("change", () => update({ semester: semesterSelect.value }));
  searchInput.addEventListener("input", () => update({ query: searchInput.value.trim() }));

  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    semesterSelect.value = "";
    update({ sport: "", semester: "", query: "" });
  });

  moreButton.addEventListener("click", () => {
    state.shown += PAGE_SIZE;
    render();
  });

  searchInput.value = state.query;
  renderSemesterOptions();
  render();
})();
