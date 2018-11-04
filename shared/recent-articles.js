var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "pass-and-passnots.html";
article2 = "college-nba-success.html";
article3 = "nba-kd-team.html";
article4 = "college-game-goodness.html";
article5 = "nba-evolution.html";
article6 = "lou-williams-6th-man.html";
article7 = "save-run.html";
article8 = "thursday-night.html";
article9 = "nfl-draft-trends.html";

title1 = "The Pass and the Pass Nots";
title2 = "Which College Basketball Program Provides the Best Chance for NBA Success?";
title3 = "There's No KD in Team";
title4 = "The 'College Game Goodness Index'";
title5 = "Evolution of the NBA";
title6 = "6th Man like Lou Williams";
title7 = "How To Save a Run";
title8 = "How Good (or Bad) are the Thursday Night NFL Games?";
title9 = "Trench Warfare: Accuracy of NFL Draft Trends";

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