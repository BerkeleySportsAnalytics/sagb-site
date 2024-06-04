var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "wrestling-not-dangerous.html";
article2 = "basketball-mvp-tracker.html";
article3 = "new-era-chess.html";
article4 = "2024-nfl-draft.html";
article5 = "nfl-kicker-problem.html";
article6 = "handedness-comparison.html";
article7 = "soccer-losing-excitement.html";
article8 = "one-hand-backhand.html";
article9 = "f1-sustainability.html";

title1 = "Why Wrestling is Not as Dangerous As You Think";
title2 = "An Analysis of Basketball Reference's MVP Tracker";
title3 = "The New Era of Chess";
title4 = "The 2024 NFL Draft Ultimate Deep Dive: An Offensive Bonanza";
title5 = "The NFL's Kicker Problem";
title6 = "Handedness Comparison in Baseball";
title7 = "Is Soccer Losing its Excitement?";
title8 = "One-Handed Backhands: Endangered but not Extinct";
title9 = "F1 and Sustainability - How can a Motorsport Exist in a Climate-Friendly World?";

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
