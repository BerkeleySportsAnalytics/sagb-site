var el = document.getElementById("featured-article-src");
var folder = el.getAttribute("folder");

article1 = "covid-small-ball";
article2 = "running-qb";
article3 = "let-the-kids-play";

title1 = "Did COVID Bring Small-ball Back to Life?";
title2 = "Running Quarterbacks: An Advantage or Unsustainable?";
title3 = "Let the Kids Play?";

date1 = "November 29, 2020";
date2 = "November 29, 2020";
date3 = "November 29, 2020";

excerpt1 = "Due to the COVID-19 pandemic, Major League Baseball instituted several new rules in order for its 60-game season to be played while keeping its players healthy. ";
excerpt2 = "It is no secret that there has been a shift in the style of play at the quarterback position.";
excerpt3 = "If you watched any baseball on TV over the last few years you’ve probably seen some variation on the MLB’s “Let the Kids Play” ad campaign.";

file1 = folder == "down" ? "articles/"+article1+".html" : article1+".html";
file2 = folder == "down" ? "articles/"+article2+".html" : article2+".html";
file3 = folder == "down" ? "articles/"+article3+".html" : article3+".html";

im_file1 = folder == "down" ? `images/dj-pics/`+article1+`/Picture1.png` : `../images/dj-pics/`+article1+`/Picture1.png`;
im_file2 = folder == "down" ? `images/dj-pics/`+article2+`/Picture1.png` : `../images/dj-pics/`+article2+`/Picture1.png `;
im_file3 = folder == "down" ? `images/dj-pics/`+article3+`/Picture1.png` : `../images/dj-pics/`+article3+`/Picture1.png`;

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