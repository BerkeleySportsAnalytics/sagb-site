var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "college-nba-success.html";
article2 = "nba-kd-team.html";
article3 = "college-game-goodness.html";
article4 = "nba-evolution.html";
article5 = "lou-williams-6th-man.html";
article6 = "save-run.html";
article7 = "thursday-night.html";
article8 = "nfl-draft-trends.html";
article9 = "kobe-lebron-debate.html";

title1 = "Which College Basketball Program Provides the Best Chance for NBA Success?";
title2 = "There's No KD in Team";
title3 = "The 'College Game Goodness Index'";
title4 = "Evolution of the NBA";
title5 = "6th Man like Lou Williams";
title6 = "How To Save a Run";
title7 = "How Good (or Bad) are the Thursday Night NFL Games?";
title8 = "Trench Warfare: Accuracy of NFL Draft Trends";
title9 = "Kobe vs Lebron";

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