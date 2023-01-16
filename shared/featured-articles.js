var el = document.getElementById("featured-article-src");
var folder = el.getAttribute("folder");

article1 = "2021-qb-class";
article2 = "japan-to-mlb";
article3 = "aaron-judge-article";
article4 = "march-madness"

title1 = "Analyzing the 2021 QB class so far: Which QB has looked the best this year and overall?";
title2 = "From Japan to MLB: The Players Before and After Signing";
title3 = "All Rise: Judge set to Break Precedent this Offseason";
title4 = "A SANE RETROSPECTIVE OF THE MADNESS OF MARCH"

date1 = "December 7, 2022";
date2 = "November 29, 2022";
date3 = "December 28, 2022";
date4 = "November 11, 2022"

excerpt1 = "The 2021 Quarterback class was one of the most hyped up Quarterback draft classes in recent memory. The buzz leading up to draft night last year was incredible as there were...";
excerpt2 = "Shohei Ohtani became the “Face of Baseball” in his 2021 MVP season, where he posted elite numbers on the mound and at the plate. However, Ohtani’s success drew attention to his former league, Nippon Professional Baseball..."
excerpt3 = "Aaron Judge put up a historic rookie season in 2017 and - after a narrow race with Jose Altuve - almost won the two most prestigious individual awards for a player, MVP and Rookie of the Year, in his first full year in the league...";
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
im_file1 = `../images/dj-pics/`+article1+`/main.jpeg`;
im_file2 = `../images/dj-pics/`+article2+`/main.jpg`;
im_file3 = `../images/dj-pics/`+article3+`/main.jpg`;
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