var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "set-rotate-dominate.html";
article2 = "set-rotate-dominate.html";
article3 = "wrestling-not-dangerous.html";
article4 = "basketball-mvp-tracker.html";
article5 = "new-era-chess.html";
article6 = "2024-nfl-draft.html";
article7 = "nfl-kicker-problem.html";
article8 = "handedness-comparison.html";
article9 = "soccer-losing-excitement.html";

title1 = "Set, Rotate, Dominate";
title2 = "Set, Rotate, Dominate";
title3 = "Why Wrestling is Not as Dangerous As You Think";
title4 = "An Analysis of Basketball Reference's MVP Tracker";
title5 = "The New Era of Chess";
title6 = "The 2024 NFL Draft Ultimate Deep Dive: An Offensive Bonanza";
title7 = "The NFL's Kicker Problem";
title8 = "Handedness Comparison in Baseball";
title9 = "Is Soccer Losing its Excitement?";

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
