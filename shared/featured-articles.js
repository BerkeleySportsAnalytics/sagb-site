var el = document.getElementById("featured-article-src");
var folder = el.getAttribute("folder");

article1 = "money-in-mls";
article2 = "super-seniors-and-transfers";
article3 = "cluster-nba-wnba";
article4 = "iga-article"

title1 = "Does More Money Mean More Success?";
title2 = "Reign of Super Seniors and Transfers in NCAA D1 Volleyball";
title3 = "Clustering NBA and WNBA Players";
title4 = "IGA SWIATEK: A NEW ERA OF TENNIS"

date1 = "March 24, 2023";
date2 = "March 24, 2023";
date3 = "March 24, 2023";
date4 = "March 24, 2023"

excerpt1 = "I love this time of year for one big reason: Major League Soccer starts up again. As someone who has been a big fan of the league for over a decade, it’s been amazing to see how much the league has evolved over the years...";
excerpt2 = "Established on October 15, 2018, the NCAA Transfer Portal is proving to be transformational in collegiate athletics on all levels. This virtual portal provides an organized system for managing athletes’ transfer processes as well as enable student-athletes to make known their desire to be a competitor for other programs..."
excerpt3 = "Any attempt by an ESPN or Sportscenter account to post WNBA highlights is routinely met with meme comments concerning the lack of entertainment value. But there’s still a ball, a hoop, and players dedicating their lives to a mastery of skills on a basketball court...";
excerpt4 = "Ever since the decline of the Williams sisters, women’s tennis has become an ever-changing field, with no single player being able to dominate the inconsistent tour for long periods of time..."

file1 = folder == "down" ? "articles/"+article1+".html" : article1+".html";
file2 = folder == "down" ? "articles/"+article2+".html" : article2+".html";
file3 = folder == "down" ? "articles/"+article3+".html" : article3+".html";
file4 = folder == "down" ? "articles/"+article4+".html" : article4+".html";


/* 
im_file1 = folder == "down" ? `images/dj-pics/`+article1+`/Picture1.png` : `../images/dj-pics/`+article1+`/Image1.PNG`;
im_file2 = folder == "down" ? `images/dj-pics/`+article2+`/Picture1.png` : `../images/dj-pics/`+article2+`/Image1.PNG`;
im_file3 = folder == "down" ? `images/dj-pics/`+article3+`/Picture1.png` : `../images/dj-pics/`+article3+`/Image1.PNG`;
*/
im_file1 = `../images/dj-pics/`+article1+`/main.png`;
im_file2 = `../images/dj-pics/`+article2+`/main.png`;
im_file3 = `../images/dj-pics/`+article3+`/main.png`;
im_file4 = `../images/dj-pics/`+article4+`/main.jpg`;



all_articles = folder == "down" ? `all-articles-1.html` : `../all-articles-1.html`

string = `
<h2 class="icon fa-file-text-o">Featured Stories</h2>

<article class="box excerpt">
<a class="image left" href="`+file1+`"><img alt="" src="`+ im_file1 +`"/></a>
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

<article class="box excerpt">
<a class="image left" href="`+file4+`"><img alt="" src="`+im_file4+`"/></a>
<div>
<header>
<span class="date">`+date4+`</span>
<h3><a href="`+file4+`">`+title4+`</a></h3>
</header>
<p>`+excerpt4+`</p>
</div>
</article>

<footer>
  <a class="button alt icon fa-file-o" href="`+all_articles+`">View All Articles</a>
</footer>
`;

document.getElementById("featured-articles").innerHTML = string;