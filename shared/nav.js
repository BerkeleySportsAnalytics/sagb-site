var el = document.getElementById("nav-src");
var curr = el.getAttribute("curr");
var folder = el.getAttribute("folder");

var home = curr == "home" ? "class='current_page_item'" : "";
var dj = curr == "dj" ? "class='current_page_item'" : "";
var projects = curr == "projects" ? "class='current_page_item'" : "";
var blog = curr == "blog" ? "class='current_page_item'" : "";
var about = curr == "about" ? "class='current_page_item'" : "";


var index_file = folder == "up" ? "../index.html" : "index.html"
var dj_file = folder == "up" ? "../data-journalism.html" : "data-journalism.html"
var projects_file = folder == "up" ? "../projects.html" : "projects.html"
var blog_file = folder == "up" ? "../blog.html" : "blog.html"
var about_file = folder == "up" ? "../about-us.html" : "about-us.html"
var contact_file = folder == "up" ? "../contact-us.html" : "contact-us.html"

var string =
"  <ul>"+
//"    <li "+home+"><a href="+index_file+">Home</a></li>"+
"    <li "+dj+"><a href="+dj_file+">Data Journalism</a></li>"+
"    <li "+projects+"><a href="+projects_file+">Projects</a></li>"+
"    <li "+blog+"><a href="+blog_file+">Blog</a></li>"+
"    <li "+about+">"+
"      <a href='#'>About</a>"+
"      <ul>"+
"        <li><a href="+about_file+">About Us</a></li>"+
"        <li><a href="+contact_file+">Contact Us</a></li>"+
//"        <li><a href='#'>Leadership</a></li>"+
"      </ul>"+
"    </li>"+
"  </ul>"

document.getElementById("nav").innerHTML = string;