var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "money-in-mls.html";
article2 = "super-seniors-and-transfers.html";
article3 = "cluster-nba-wnba.html";
article4 = "iga-article.html";
article5 = "2021-qb-class.html";
article6 = "aaron-judge-article.html";
article7 = "concussion-article.html";
article8 = "a-tale-of-two-rebounds.html";
article9 = "joe-musgrove-article.html";

title1 = "Does More Money Mean More Success?";
title2 = "Reign of Super Seniors and Transfers in NCAA D1 Volleyball";
title3 = "Clustering NBA and WNBA Players";
title4 = "Iga Swiatek: A New Era of Tennis";
title5 = "Analyzing the 2021 QB class so far: Which QB has looked the best this year and overall?";
title6 = "All Rise: Judge set to Break Precedent this Offseason";
title7 = "Don't Let it Go to Your Head ... Literally";
title8 = "A Tale of Two Rebounds";
title9 = "Higher Stakes, Higher Spin: With the season winding down, were pitchers inclined to win at any cost?";

article1 = folder == "down" ? "articles/"+article1 : article1;
article2 = folder == "down" ? "articles/"+article2 : article2;
article3 = folder == "down" ? "articles/"+article3 : article3;
article4 = folder == "down" ? "articles/"+article4 : article4;
article5 = folder == "down" ? "articles/"+article5 : article5;
article6 = folder == "down" ? "articles/"+article6 : article6;
article7 = folder == "down" ? "articles/"+article7 : article7;
article8 = folder == "down" ? "articles/"+article8 : article8;
article9 = folder == "down" ? "articles/"+article9 : article9;

string = `
<li><a href=`+article1+`>`+title1+`</a></li>
<li><a href=`+article2+`>`+title2+`</a></li>
<li><a href=`+article3+`>`+title3+`</a></li>
<li><a href=`+article4+`>`+title4+`</a></li>
<li><a href=`+article5+`>`+title5+`</a></li>
<li><a href=`+article6+`>`+title6+`</a></li>
<li><a href=`+article7+`>`+title7+`</a></li>
<li><a href=`+article8+`>`+title8+`</a></li>
<li><a href=`+article9+`>`+title9+`</a></li>
`;

document.getElementById("recent-articles").innerHTML = string;
