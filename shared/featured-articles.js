var el = document.getElementById("featured-article-src");
var folder = el.getAttribute("folder");

article1 = "nba-roty";
article2 = "screamers-to-tap-ins";
article3 = "ligue-1-article";
article4 = "two-high"

title1 = "How Meaningful is the NBA ROTY Award?";
title2 = "From Screamers to Tap-Ins: The Truth Behind the Evolution of Shot Positioning in Football";
title3 = "Is Ligue 1 Still a Top 5 League?";
title4 = "Two High: Why didn’t it stop Mahomes?"

date1 = "April 16, 2023";
date2 = "April 16, 2023";
date3 = "April 16, 2023";
date4 = "April 16, 2023"

excerpt1 = "Since the 1960s, awards have helped shape NBA history and the way fans perceive players of different generations. In most cases, an accolade in this league is a stamp that etches a player in the history books as one of the greatest to ever do it...";
excerpt2 = "Every football (soccer) fan has, at some point, dreamed of scoring a Gerrard-esque worldie as a child. A strike from distance that would make time stop, with such fierce power, bending into the top corner to the elation of the crowd..."
excerpt3 = "“It’s a farmers league, though.” Let’s face it. We’ve all heard the term “farmers league” thrown around to describe leagues such as Ligue 1 due to the perception that the league generally lacks the competitiveness and financial power of other top European leagues...";
excerpt4 = "In the last three years we have seen the rise of the two high safety coverages popularized by former Denver Broncos Head Coach, Vic Fangio, which took the league by storm and earned many of his assistant coaches promotions and even a head coaching job..."

file1 = folder == "down" ? "articles/"+article1+".html" : article1+".html";
file2 = folder == "down" ? "articles/"+article2+".html" : article2+".html";
file3 = folder == "down" ? "articles/"+article3+".html" : article3+".html";
file4 = folder == "down" ? "articles/"+article4+".html" : article4+".html";


/* 
im_file1 = folder == "down" ? `images/dj-pics/`+article1+`/Picture1.png` : `../images/dj-pics/`+article1+`/Image1.PNG`;
im_file2 = folder == "down" ? `images/dj-pics/`+article2+`/Picture1.png` : `../images/dj-pics/`+article2+`/Image1.PNG`;
im_file3 = folder == "down" ? `images/dj-pics/`+article3+`/Picture1.png` : `../images/dj-pics/`+article3+`/Image1.PNG`;
*/
im_file1 = `../images/dj-pics/`+article1+`/main.jpg`;
im_file2 = `../images/dj-pics/`+article2+`/main.jpeg`;
im_file3 = `../images/dj-pics/`+article3+`/main.jpg`;
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
