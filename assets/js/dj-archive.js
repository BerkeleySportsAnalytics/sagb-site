/* Gallery + filters for dj-archive.html. Data comes from shared/articles-data.js and shared/podcasts-data.js. */
(function () {
  const articles = [...(window.SAGB_ARTICLES || []), ...(window.SAGB_PODCASTS || [])].sort(
    (a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title)
  );
  const PAGE_SIZE = 24;
  const SEASON_ORDER = { Spring: 1, Summer: 2, Fall: 3 };
  const TYPES = [
    { value: "article", label: "Articles" },
    { value: "podcast", label: "Podcasts", tag: "Podcast" },
  ];
  const formatType = (type) => (type === "blog" ? "article" : type);

  const grid = document.getElementById("article-grid");
  const sportList = document.getElementById("sport-filters");
  const typeSelect = document.getElementById("type-filter");
  const semesterSelect = document.getElementById("semester-filter");
  const searchInput = document.getElementById("search-filter");
  const countLabel = document.getElementById("articles-count");
  const clearButton = document.getElementById("articles-clear");
  const moreButton = document.getElementById("articles-more");
  const emptyMessage = document.getElementById("articles-empty");

  const params = new URLSearchParams(window.location.search);
  const state = {
    sport: params.get("sport") || "",
    type: formatType(params.get("type") || ""),
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
  const typeCounts = countBy((a) => [formatType(a.type)]);

  const joinNames = (parts) =>
    parts.length <= 2 ? parts.join(" &amp; ") : parts.slice(0, -1).join(", ") + " &amp; " + parts[parts.length - 1];

  const cardHtml = (a) => {
    const type = TYPES.find((t) => t.value === formatType(a.type));
    const tags =
      a.sports.map((s) => `<a class="tag" href="?sport=${encodeURIComponent(s)}" data-sport="${escapeHtml(s)}">${escapeHtml(s)}</a>`).join("") +
      `<a class="tag tag-semester" href="?semester=${encodeURIComponent(a.semester)}" data-semester="${escapeHtml(a.semester)}">${escapeHtml(a.semester)}</a>` +
      (type && type.tag ? `<a class="tag tag-type" href="?type=${type.value}" data-type="${type.value}">${type.tag}</a>` : "");

    if (a.type === "podcast") {
      const link = `href="${escapeHtml(a.url)}" target="_blank" rel="noopener noreferrer"`;
      const meta = [escapeHtml(a.series), a.dateLabel, escapeHtml(a.duration)].filter(Boolean).join(" · ");
      return `<article class="article-card is-podcast">
      <a class="article-card-image" ${link} aria-label="Listen on Spotify: ${escapeHtml(a.title)}">
        <img loading="lazy" src="${escapeHtml(a.image)}" alt="">
        <span class="podcast-play"><i class="fa fa-play" aria-hidden="true"></i></span>
      </a>
      <div class="article-card-body">
        <div class="article-card-tags">${tags}</div>
        <h3 class="article-card-title"><a ${link}>${escapeHtml(a.title)}</a></h3>
        <p class="article-card-meta">${meta}</p>
        <p class="article-card-excerpt">${escapeHtml(a.excerpt)}</p>
        <a class="podcast-listen" ${link}><i class="fa fa-spotify" aria-hidden="true"></i> Listen on Spotify</a>
      </div>
    </article>`;
    }

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

  const searchText = (a) =>
    a.type === "podcast"
      ? [a.title, a.series, a.excerpt].join(" ")
      : a.title + " " + a.authors.map((p) => p.name).join(" ");

  const matches = (a) => {
    if (state.sport && !a.sports.includes(state.sport)) return false;
    if (state.type && formatType(a.type) !== state.type) return false;
    if (state.semester && a.semester !== state.semester) return false;
    if (state.query && !searchText(a).toLowerCase().includes(state.query.toLowerCase())) return false;
    return true;
  };

  const syncUrl = () => {
    const next = new URLSearchParams();
    if (state.sport) next.set("sport", state.sport);
    if (state.type) next.set("type", state.type);
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

  const renderSelectOptions = () => {
    typeSelect.innerHTML =
      '<option value="">All formats</option>' +
      TYPES.filter((t) => typeCounts.has(t.value))
        .map((t) => `<option value="${t.value}">${t.label} (${typeCounts.get(t.value)})</option>`)
        .join("");
    semesterSelect.innerHTML =
      '<option value="">All semesters</option>' +
      semesters.map((s) => `<option value="${escapeHtml(s)}">${escapeHtml(s)} (${semesterCounts.get(s)})</option>`).join("");
  };

  const render = () => {
    const results = articles.filter(matches);
    grid.innerHTML = results.slice(0, state.shown).map(cardHtml).join("");
    countLabel.textContent = `${results.length} result${results.length === 1 ? "" : "s"}`;
    emptyMessage.hidden = results.length > 0;
    moreButton.hidden = results.length <= state.shown;
    clearButton.hidden = !(state.sport || state.type || state.semester || state.query);
    typeSelect.value = state.type;
    semesterSelect.value = state.semester;
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
    const tag = event.target.closest("[data-sport], [data-semester], [data-type]");
    if (!tag) return;
    event.preventDefault();
    if (tag.dataset.sport) update({ sport: tag.dataset.sport });
    if (tag.dataset.semester) update({ semester: tag.dataset.semester });
    if (tag.dataset.type) update({ type: formatType(tag.dataset.type) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  typeSelect.addEventListener("change", () => update({ type: formatType(typeSelect.value) }));
  semesterSelect.addEventListener("change", () => update({ semester: semesterSelect.value }));
  searchInput.addEventListener("input", () => update({ query: searchInput.value.trim() }));

  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    update({ sport: "", type: "", semester: "", query: "" });
  });

  moreButton.addEventListener("click", () => {
    state.shown += PAGE_SIZE;
    render();
  });

  searchInput.value = state.query;
  renderSelectOptions();
  render();
})();
