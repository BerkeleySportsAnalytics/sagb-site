const el = document.getElementById("nav-src");
const curr = el ? el.getAttribute("curr") : "";
const isSubfolder = el ? el.getAttribute("folder") === "up" : false;

const getPath = (filename) => (isSubfolder ? `../${filename}` : filename);

const navItems = [
  { id: "home", label: "Home", file: "index.html" },
  { id: "about", label: "About", file: "about-us.html" },
  { id: "dj", label: "Data Journalism", file: "data-journalism.html" },
  { id: "projects", label: "Projects", file: "projects.html" },
  { id: "business", label: "Business", file: "business.html" },
  // { id: "blog", label: "Blog", file: "blog.html" },
  // { id: "nbaprojs", label: "NBA Projections", file: "statlineprojections.html" },
  // { id: "board", label: "Our Board", file: "board.html" },
  { id: "conference", label: "Conference", file: "conference.html" },
  { id: "apply", label: "Apply", file: "apply.html" },
  { id: "coffeechats", label: "Coffee Chats", file: "coffee-chats.html"}
];

const menuMarkup = navItems
  .map(({ id, label, file }) => {
    const activeClass = curr === id ? " class='current_page_item'" : "";
    return `    <li${activeClass}><a href="${getPath(file)}">${label}</a></li>`;
  })
  .join("\n");

const navContainer = document.getElementById("nav");
if (navContainer) {
  navContainer.innerHTML = `\n  <ul>\n${menuMarkup}\n  </ul>`;
}
