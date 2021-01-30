var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "nfl-pay-defense.html";
article2 = "iceland-soccer.html";
article3 = "team-make-CFP.html";
article4 = "runners-on-base.html";
article5 = "heliocentricity.html";
article6 = "redefined-wild-card.html";
article7 = "bubble-basketball.html";
article8 = "three-point-puzzle.html";
article9 = "shooting-percentages.html";

title1 = "Defensive Backs or Defensive Line? Who Do You Pay?";
title2 = "The Growth of Iceland Soccer";
title3 = "Will Your Team Make the CFP?";
title4 = "RBR: A Statistical Summary of Pitching With Runners on Base";
title5 = "Heliocentricity in the NBA";
title6 = "Let the Kids Play: Exploring the Benefits of an Expanded MLB Postseason and Redefined Wild Card Series";
title7 = "Bubble Basketball: A Brand New Game";
title8 = "The Three Point Puzzle";
title9 = "The NBA Bubble and Shooting Percentages";

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
