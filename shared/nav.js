var el = document.getElementById("nav-src");
var curr = el.getAttribute("curr");
var folder = el.getAttribute("folder");

var home = curr == "home" ? "class='current_page_item'" : "";
var about = curr == "about" ? "class='current_page_item'" : "";
var dj = curr == "dj" ? "class='current_page_item'" : "";
var projects = curr == "projects" ? "class='current_page_item'" : "";
var business = curr == "business" ? "class='current_page_item'" : "";
// var blog = curr == "blog" ? "class='current_page_item'" : "";
// var nbaprojs = curr == "nbaprojs" ? "class='current_page_item'" : "";
var board = curr == "board" ? "class='current_page_item'" : "";
var joinus = curr == "joinus" ? "class='current_page_item'" : "";


var index_file = folder == "up" ? "../index.html" : "index.html"
var about_file = folder == "up" ? "../about-us.html" : "about-us.html"
var dj_file = folder == "up" ? "../data-journalism.html" : "data-journalism.html"
var projects_file = folder == "up" ? "../projects.html" : "projects.html"
var business_file = folder == "up" ? "../business.html" : "business.html"
// var blog_file = folder == "up" ? "../blog.html" : "blog.html"
// var nbaprojs_file = folder == "up" ? "../statlineprojections.html" : "statlineprojections.html"
var board_file = folder == "up" ? "../board.html" : "board.html"
var contact_file = folder == "up" ? "../apply.html" : "apply.html"

//Added NBA Projections
var string =
"  <ul>"+
"    <li "+home+"><a href="+index_file+">Home</a></li>"+
"    <li "+about+"><a href="+about_file+">About</a>"+
"    <li "+dj+"><a href="+dj_file+">Data Journalism</a></li>"+
"    <li "+projects+"><a href="+projects_file+">Projects</a></li>"+
"    <li "+business+"><a href="+business_file+">Business</a></li>"+
// "    <li "+blog+"><a href="+blog_file+">Blog</a></li>"+
// "    <li "+nbaprojs+"><a href="+nbaprojs_file+">NBA Projections</a></li>"+
"    <li "+board+"><a href="+board_file+">Our Board</a>"+
"    <li "+joinus+"><a href="+contact_file+">Join Us</a></li>"+
"  </ul>"

document.getElementById("nav").innerHTML = string;

