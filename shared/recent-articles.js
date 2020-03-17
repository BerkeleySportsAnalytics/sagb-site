var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "is-injury-prediction-the-next-moneyball.html";
article2 = "clayton-kershaw-playoff-choker.html";
article3 = "jeopardy-to-vegas.html";
article4 = "speed-kills.html";
article5 = "weight-theres-more.html";
article6 = "new-age-moneyball.html";
article7 = "point-centers.html";
article8 = "patriots-historical-domination.html";
article9 = "nba-free-agency-2016.html";

title1 = "Is Injury Prediction the Next Moneyball?";
title2 = "Clayton Kershaw: Playoff Choker?";
title3 = "America's Game Goes to Vegas: How to bet on the Jeopardy! GOAT";
title4 = "Speed Kills?";
title5 = "But Weight, There’s More";
title6 = "New-Age Moneyball: Breaking Down How Two Low-Budget Teams Made the American League Wild Card Game";
title7 = "Point Centers, a New Breed in the NBA";
title8 = "The New England Patriots: Historical Domination";
title9 = "Blew it All on Luol? Turned off by Mozgov?: Statistical Analysis of 2016 NBA Free Agency";

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
