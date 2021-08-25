var el = document.getElementById("featured-article-src");
var folder = el.getAttribute("folder");

article1 = "hands_up";
article2 = "break-points";
article3 = "mlb-day-night";
article4 = "march-madness"

title1 = "Hands Up";
title2 = "BREAK POINTS: WHAT’S THE KEY?";
title3 = "HYPOTHESIS TESTING MLB HITTERS IN DAY AND NIGHT GAMES";
title4 = "A SANE RETROSPECTIVE OF THE MADNESS OF MARCH"

date1 = "June 6, 2021";
date2 = "March 30, 2021";
date3 = "May 20, 2021";
date4 = "May 16, 2021"

excerpt1 = "A couple of years ago, Bob Myers, the general manager of the Golden State Warriors, described that his “ideal player would be 6 foot 8 with a 7 foot 6 wingspan”...";
excerpt2 = "One of the most nerve wracking situations as a tennis player is being faced with a breakpoint. Your opponent seemingly has all the momentum and they know it."
excerpt3 = "Prior to 1935, all Major League Baseball games were played during the afternoon. When the night game was introduced, it added a new aspect to the sport...";
excerpt4 = "The NCAA tournament this year brought many surprises. From number 11 seed UCLA making it to the final four and losing on a fluke half courter by Gonzaga guard Jalen Suggs to the magic of Max Abmas..."

file1 = folder == "down" ? "articles/"+article1+".html" : article1+".html";
file2 = folder == "down" ? "articles/"+article2+".html" : article2+".html";
file3 = folder == "down" ? "articles/"+article3+".html" : article3+".html";
file4 = folder == "down" ? "articles/"+article4+".html" : article4+".html";


/* 
im_file1 = folder == "down" ? `images/dj-pics/`+article1+`/Picture1.png` : `../images/dj-pics/`+article1+`/Image1.PNG`;
im_file2 = folder == "down" ? `images/dj-pics/`+article2+`/Picture1.png` : `../images/dj-pics/`+article2+`/Image1.PNG`;
im_file3 = folder == "down" ? `images/dj-pics/`+article3+`/Picture1.png` : `../images/dj-pics/`+article3+`/Image1.PNG`;
*/
im_file1 = `../images/dj-pics/`+article1+`/Image1.PNG`;
im_file2 = `../images/dj-pics/`+article2+`/Image1.PNG`;
im_file3 = `../images/dj-pics/`+article3+`/Image1.PNG`;
im_file4 = `../images/dj-pics/`+article4+`/Image1.PNG`;



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