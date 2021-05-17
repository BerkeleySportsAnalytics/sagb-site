var el = document.getElementById("featured-article-src");
var folder = el.getAttribute("folder");

article1 = "edge";
article2 = "jeff-bezos";
article3 = "march-madness";

title1 = "Getting Edgy Before Day 2";
title2 = "What if Jeff Bezos Bought the Mariners?";
title3 = "A Sane Retrospective of the Madness of March";

date1 = "May 16, 2021";
date2 = "May 16, 2021";
date3 = "May 16, 2021";

excerpt1 = "If you’re coming here from my previous article If You're Drafting a Defensive Tackle in the First Round, What are you Doing? you’re one step closer to fixing your defensive line correctly. Whereas their interior counterparts have often been mentioned as the inferior position of value, edge rushers are a significant component of defensive football, directly impacting the primary presence of the passing game. To address this positional need, teams often throw premium value to secure a dominant defensive presence, ranging from hundreds of millions of dollars and high draft picks in attempts to hinder the opposing offenses’ passing schemes.";
excerpt2 = "The NCAA tournament this year brought many surprises. From number 11 seed UCLA making it to the final four and losing on a fluke half courter by Gonzaga guard Jalen Suggs to the magic of Max Abmas and Cinderella Oral Roberts overcoming being given a fifteen seed and taking down number two seed Ohio State on the way to the Sweet 16 there was no shortage of excitement. One of the most surprising occurrences of the NCAA tournament this year was the overwhelming representation of the PAC12 in the later rounds of the NCAA tournament. A quarter of the teams in the sweet 16 were representatives of the PAC 12 conference and three out of eight of the elite eight teams were from the PAC 12 (Oregon State, UCLA, USC). This came as a shock to many of the college basketball experts as the PAC 12 was constantly disrespected during the regular season.";
excerpt3 = "As you've probably heard by now, Jeff Bezos has stepped down from his job as CEO of Amazon. With an estimated net worth of 180 billion dollars, Bezos has more money than most people would know what to do with - and I'm sure he's looking for ways to spend it. As the world's richest person, if he were to purchase a sports team, he would also be the league's richest owner. He could buy an NBA or NFL team - but in those leagues, he would be constrained to a salary cap of between $100 and $200 million per year, which wouldn't properly utilize Bezos's massive fortune. Instead, he should buy an MLB team, as the MLB has no salary cap and instead has a luxury tax. And what better team to buy than the Seattle Mariners, the perpetually underwhelming team near Amazon HQ who haven't made the playoffs since 2001?";

file1 = folder == "down" ? "articles/"+article1+".html" : article1+".html";
file2 = folder == "down" ? "articles/"+article2+".html" : article2+".html";
file3 = folder == "down" ? "articles/"+article3+".html" : article3+".html";

im_file1 = folder == "down" ? `images/dj-pics/`+article1+`/Picture1.png` : `../images/dj-pics/`+article1+`/Image1.PNG`;
im_file2 = folder == "down" ? `images/dj-pics/`+article2+`/Picture1.png` : `../images/dj-pics/`+article2+`/Image1.PNG`;
im_file3 = folder == "down" ? `images/dj-pics/`+article3+`/Picture1.png` : `../images/dj-pics/`+article3+`/Image1.PNG`;

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