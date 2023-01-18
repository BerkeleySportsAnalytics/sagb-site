var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "joe-musgrove-article.html";
article2 = "joe-musgrove-article.html";
article3 = "joe-musgrove-article.html";
article4 = "joe-musgrove-article.html";
article5 = "joe-musgrove-article.html";
article6 = "joe-musgrove-article.html";
article7 = "2021-qb-class.html";
article8 = "japan-to-mlb.html";
article9 = "aaron-judge-article.html";

title1 = "Higher Stakes, Higher Spin: With the season winding down, were pitchers inclined to win at any cost?";
title2 = "Higher Stakes, Higher Spin: With the season winding down, were pitchers inclined to win at any cost?";
title3 = "Higher Stakes, Higher Spin: With the season winding down, were pitchers inclined to win at any cost?";
title4 = "Higher Stakes, Higher Spin: With the season winding down, were pitchers inclined to win at any cost?";
title5 = "Higher Stakes, Higher Spin: With the season winding down, were pitchers inclined to win at any cost?";
title6 = "Higher Stakes, Higher Spin: With the season winding down, were pitchers inclined to win at any cost?";
title7 = "Analyzing the 2021 QB class so far: Which QB has looked the best this year and overall?";
title8 = "From Japan to MLB: The Players Before and After Signing";
title9 = "All Rise: Judge set to Break Precedent this Offseason";

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
