var el = document.getElementById("featured-article-src");
var folder = el.getAttribute("folder");

article1 = "nba-free-agency-2016";
article2 = "patriots-historical-domination";
article3 = "mlb-names";

title1 = "Blew it All on Luol? Turned off by Mozgov?: Statistical Analysis of 2016 NBA Free Agency";
title2 = "The New England Patriots: Historical Domination";
title3 = "Finding the Most \"Baseball Sounding\" Name, Analytically";

date1 = "October 31, 2019";
date2 = "October 31, 2019";
date3 = "February 5, 2018";

excerpt1 = "Looking back on the 2016 NBA summer free agency, it is obvious that there were some ridiculous contractual overvaluations...";
excerpt2 = "In 2007, the New England Patriots had one of the most historic football seasons ever going 16-0 in the regular season.";
excerpt3 = "There are so many things to talk about for each player, but I have just one thing in mind. Their names.";

file1 = folder == "down" ? "articles/"+article1+".html" : article1+".html";
file2 = folder == "down" ? "articles/"+article2+".html" : article2+".html";
file3 = folder == "down" ? "articles/"+article3+".html" : article3+".html";

im_file1 = folder == "down" ? `images/dj-pics/`+article1+`/main.jpg` : `../images/dj-pics/`+article1+`/main.jpg`;
im_file2 = folder == "down" ? `images/dj-pics/`+article2+`/main.jpg` : `../images/dj-pics/`+article2+`/main.jpg`;
im_file3 = folder == "down" ? `images/dj-pics/`+article3+`/main.jpg` : `../images/dj-pics/`+article3+`/main.jpg`;

all_articles = folder == "down" ? `all-articles-1.html` : `../all-articles-1.html`

string = `
<h2 class="icon fa-file-text-o">Featured Posts</h2>

<article class="box excerpt">
<a class="image left" href="`+file1+`"><img alt="" src="`+im_file1+`"/></a>
<div>
<header>
<span class="date">`+date1+`</span>
<h3><a href="`+file1+`">`+title1+`</a></h3>
</header>
<p>`+excerpt1+`</p>
</div>
</article>

<article class="box excerpt">
<a class="image left" href="`+file2+`"><img alt="" src="`+im_file2+`"/></a>
<div>
<header>
<span class="date">`+date2+`</span>
<h3><a href="`+file2+`">`+title2+`</a></h3>
</header>
<p>`+excerpt2+`</p>
</div>
</article>

<article class="box excerpt">
<a class="image left" href="`+file3+`"><img alt="" src="`+im_file3+`"/></a>
<div>
<header>
<span class="date">`+date3+`</span>
<h3><a href="`+file3+`">`+title3+`</a></h3>
</header>
<p>`+excerpt3+`</p>
</div>
</article>

<footer>
  <a class="button alt icon fa-file-o" href="`+all_articles+`">View All Articles</a>
</footer>
`;

document.getElementById("featured-articles").innerHTML = string;