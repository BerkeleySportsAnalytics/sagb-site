const el = document.getElementById("nav-src");
const curr = el ? el.getAttribute("curr") : "";
const isSubfolder = el ? el.getAttribute("folder") === "up" : false;

const getPath = (filename) => (isSubfolder ? `../${filename}` : filename);

const navItems = [
  { id: "home", label: "Home", file: "index.html" },
  { id: "about", label: "About", file: "about-us.html" },
  {
    id: "branches",
    label: "Branches",
    children: [
      { id: "dj", label: "Data Journalism", file: "data-journalism.html" },
      { id: "projects", label: "Projects", file: "projects.html" },
      { id: "business", label: "Business", file: "business.html" },
    ],
  },
  { id: "dj-archive", label: "DJ Archive", file: "dj-archive.html" },
  // { id: "nbaprojs", label: "NBA Projections", file: "statlineprojections.html" },
  // { id: "board", label: "Our Board", file: "board.html" },
  { id: "conference", label: "Conference", file: "conference.html" },
  // { id: "coffeechats", label: "Coffee Chats", file: "coffee-chats.html"},
  { id: "joinus", label: "Join Us", file: "apply.html", className: "nav-button" },
];

const renderItem = ({ id, label, file, children, className }) => {
  const isCurrent = curr === id || (children || []).some((child) => child.id === curr);
  const classes = [isCurrent ? "current_page_item" : "", className || ""].filter(Boolean).join(" ");
  const classAttr = classes ? ` class='${classes}'` : "";
  if (children) {
    const submenu = children.map(renderItem).join("\n");
    return `    <li${classAttr}><a>${label}</a>\n      <ul>\n${submenu}\n      </ul>\n    </li>`;
  }
  return `    <li${classAttr}><a href="${getPath(file)}">${label}</a></li>`;
};

const menuMarkup = navItems.map(renderItem).join("\n");

const navContainer = document.getElementById("nav");
if (navContainer) {
  navContainer.innerHTML = `\n  <ul>\n${menuMarkup}\n  </ul>`;
}

const logo = document.getElementById("logo");
if (logo) {
  let img = logo.querySelector("img");
  if (!img) {
    img = document.createElement("img");
    logo.replaceChildren(img);
  }
  img.src = getPath("images/logos_2026/bear_white.png");
  if (!img.getAttribute("alt")) img.alt = "Sports Analytics Group at Berkeley";
}
