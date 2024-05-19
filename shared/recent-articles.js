var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "2024-nfl-draft.html";
article2 = "nfl-kicker-problem.html";
article3 = "handedness-comparison.html";
article4 = "soccer-losing-excitement.html";
article5 = "one-hand-backhand.html";
article6 = "f1-sustainability.html";
article7 = "fixing-manchester-united.html";
article8 = "defense-strikes-harder.html";
article9 = "transfer-values.html";

title1 = "The 2024 NFL Draft Ultimate Deep Dive: An Offensive Bonanza";
title2 = "The NFL's Kicker Problem";
title3 = "Handedness Comparison in Baseball";
title4 = "Is Soccer Losing its Excitement?";
title5 = "One-Handed Backhands: Endangered but not Extinct";
title6 = "F1 and Sustainability - How can a Motorsport Exist in a Climate-Friendly World?";
title7 = "Fixing Manchester United: What Has Been Done And What Should Be Done";
title8 = "When the Defense Strikes Harder";
title9 = "Decoding TransfrMarket: Analyzing Player Values Versus Player Performance";

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
