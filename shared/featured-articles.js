var el = document.getElementById("featured-article-src");
var folder = el.getAttribute("folder");

article1 = "nba-4-point";
article2 = "nba-born";
article3 = "centre-backs";

title1 = " Should the NBA Have a 4-Point Line?";
title2 = "In Which State Are the Most NBA Players Born?";
title3 = "Centre-Backs are the New Playmakers";

date1 = "March 30, 2021";
date2 = "March 30, 2021";
date3 = "March 30, 2021";

excerpt1 = "In recent years, the NBA has experienced a boom in 3-point shooting with players like Stephen Curry and Damian Lillard, challenging what is considered a “bad shot”. Pulling up from 30 feet has become routine rather than abnormal. For reference, in the 2013-14 regular season (the season before Curry’s first MVP season), there were 3814 shots from 27 feet and further. With the advent of Curry and more game-changers, in the 2018-19 season NBA players shot 10611 shots from this deep range. Gameplans and defensive tactics have shifted: one example would be fast-breaks, where many shooters now drift to the 3-point line instead of driving for a layup.";
excerpt2 = "NBA players come from all over the United States and even different countries. Since being established in 1949 The NBA has grown from 17 teams to 30 teams and is still continuing to grow. With so many teams, the amount of players has also grown, creating a diverse spread in hometowns throughout the 50 states.";
excerpt3 = "“Obviously I’m looking for shape and size, and someone who heads it and kicks it”. - Barry Dunn, Millwall FC Chief Scout, on his ideal centre-back (2017). Dunn’s description of the model centre-back may seem primitive, but you can’t really blame  him. Growing up as a centre-back in England, I hardly found myself embracing the ‘beautiful  game’. After all, this is the land of the traditional central defender; the hard-tackling, header-winning  rock at the back. And with this expectation comes the inevitable discouragement of playing with the  ball at your feet - “just be safe with it”, was the most common instruction I heard from my coaches. ";;

file1 = folder == "down" ? "articles/"+article1+".html" : article1+".html";
file2 = folder == "down" ? "articles/"+article2+".html" : article2+".html";
file3 = folder == "down" ? "articles/"+article3+".html" : article3+".html";

im_file1 = folder == "down" ? `images/dj-pics/`+article1+`/Picture1.png` : `../images/dj-pics/`+article1+`/Image1.PNG`;
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