(function () {
  var tracks = document.querySelectorAll(".board-track");
  var touchOnly = window.matchMedia("(hover: none)");
  var seasonEl = document.querySelector("[data-board-season]");
  var season = seasonEl ? seasonEl.getAttribute("data-board-season") : "";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function infoRow(label, value) {
    var row = el("div", "bb-row");
    row.appendChild(el("span", "bb-row-label", label));
    row.appendChild(el("span", "bb-row-value", value));
    return row;
  }

  function makeBaseballCard(card, group) {
    var branch = card.getAttribute("data-branch") || group;
    var front = card.querySelector(".flip-card-front .card");
    var back = card.querySelector(".flip-card-back");
    var img = front.querySelector("img");
    var nameEl = front.querySelector(".head3");
    var roleEl = front.querySelector(".title2");
    var name = nameEl.textContent.trim();
    var roles = roleEl
      ? roleEl.innerHTML
          .replace(/<br\s*\/?>/gi, "\n")
          .replace(/<[^>]+>/g, "")
          .split(/\n/)
          .map(function (line) { return line.replace(/\s+/g, " ").trim(); })
          .filter(Boolean)
      : [];

    var photo = el("div", "bb-photo");
    front.insertBefore(photo, img);
    photo.appendChild(img);

    var badge = el("div", "bb-badge");
    var bear = document.createElement("img");
    bear.src = "images/logos_2026/bear_white.png";
    bear.alt = "";
    badge.appendChild(bear);
    photo.appendChild(badge);

    var banner = el("div", "bb-name");
    banner.appendChild(nameEl);
    photo.appendChild(banner);

    if (roleEl) {
      roleEl.classList.add("bb-position");
      roleEl.innerHTML = roles
        .map(function (line) {
          return line.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        })
        .join("<br>");
    }

    var foot = el("div", "bb-foot");
    foot.appendChild(el("span", "bb-branch", branch));
    foot.appendChild(el("span", "bb-season", season ? "'" + season.slice(2) : ""));
    front.appendChild(foot);

    var header = el("div", "bb-back-head");
    header.appendChild(el("span", "bb-back-name", name));
    var linkedin = back.querySelector("a");
    if (linkedin) {
      linkedin.setAttribute("aria-label", name + " on LinkedIn");
      header.appendChild(linkedin);
    }
    back.insertBefore(header, back.firstChild);

    var rows = el("div", "bb-rows");
    rows.appendChild(infoRow("Branch", branch));
    roles.forEach(function (line, i) {
      rows.appendChild(infoRow(i === 0 ? "Position" : "", line));
    });
    var classYear = card.getAttribute("data-class");
    if (classYear) rows.appendChild(infoRow("Class", "Class of " + classYear));
    back.insertBefore(rows, header.nextSibling);

    var heading = back.querySelector(".head2");
    if (heading) heading.textContent = "Scouting Report";
  }

  Array.prototype.forEach.call(tracks, function (track) {
    var title = track.previousElementSibling;
    var group = title.textContent.trim();
    track.classList.add("team-" + slugify(group));
    Array.prototype.forEach.call(track.querySelectorAll(".flip-card"), function (card) {
      makeBaseballCard(card, group);
    });

    var head = document.createElement("div");
    head.className = "board-group-head";
    title.parentNode.insertBefore(head, title);
    head.appendChild(title);

    var count = document.createElement("span");
    count.className = "board-group-count";
    count.setAttribute("aria-hidden", "true");
    count.textContent = track.querySelectorAll(".flip-card").length;
    title.appendChild(count);

    var arrows = document.createElement("div");
    arrows.className = "board-arrows";
    arrows.innerHTML =
      '<button type="button" class="board-arrow" data-dir="-1" aria-label="Scroll left"><i class="fa fa-angle-left"></i></button>' +
      '<button type="button" class="board-arrow" data-dir="1" aria-label="Scroll right"><i class="fa fa-angle-right"></i></button>';
    head.appendChild(arrows);

    var prev = arrows.children[0];
    var next = arrows.children[1];

    function update() {
      var max = track.scrollWidth - track.clientWidth;
      var overflowing = max > 2;
      arrows.hidden = !overflowing;
      track.classList.toggle("is-overflowing", overflowing);
      track.classList.toggle("at-start", track.scrollLeft <= 2);
      track.classList.toggle("at-end", track.scrollLeft >= max - 2);
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max - 2;
    }

    arrows.addEventListener("click", function (e) {
      var btn = e.target.closest(".board-arrow");
      if (!btn) return;
      var dir = Number(btn.getAttribute("data-dir"));
      track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: "smooth" });
    });

    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    Array.prototype.forEach.call(track.querySelectorAll(".flip-card"), function (card) {
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-pressed", "false");
      var name = card.querySelector(".head3");
      if (name) card.setAttribute("aria-label", "Show bio for " + name.textContent.trim());

      function toggle() {
        var flipped = card.classList.toggle("is-flipped");
        card.setAttribute("aria-pressed", String(flipped));
      }

      card.addEventListener("click", function (e) {
        if (e.target.closest("a") || !touchOnly.matches) return;
        toggle();
      });
      card.addEventListener("focusout", function (e) {
        if (card.contains(e.relatedTarget)) return;
        card.classList.remove("is-flipped");
        card.setAttribute("aria-pressed", "false");
      });
      card.addEventListener("keydown", function (e) {
        if (e.target !== card) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
    });
  });
})();
