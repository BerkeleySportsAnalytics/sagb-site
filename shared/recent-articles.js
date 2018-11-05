var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "pat-mahomes-hof.html";
article2 = "powerplay-in-cricket.html";
article3 = "pass-and-passnots.html";
article4 = "college-nba-success.html";
article5 = "nba-kd-team.html";
article6 = "college-game-goodness.html";
article7 = "nba-evolution.html";
article8 = "lou-williams-6th-man.html";
article9 = "save-run.html";

title1 = "Why Patrick Mahomes has an Early Claim to the Hall of Fame";
title2 = "Optimal PowerPlay Strategies in Limited Overs Cricket";
title3 = "The Pass and the Pass Nots";
title4 = "Which College Basketball Program Provides the Best Chance for NBA Success?";
title5 = "There's No KD in Team";
title6 = "The 'College Game Goodness Index'";
title7 = "Evolution of the NBA";
title8 = "6th Man like Lou Williams";
title9 = "How To Save a Run";

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