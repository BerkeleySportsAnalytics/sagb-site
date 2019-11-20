var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "jeopardy-to-vegas.html";
article2 = "speed-kills.html";
article3 = "weight-theres-more.html";
article4 = "new-age-moneyball.html";
article5 = "point-centers.html";
article6 = "patriots-historical-domination.html";
article7 = "nba-free-agency-2016.html";
article8 = "to-hit-or-not-to-hit.html";
article9 = "decoding-the-draft.html";

title1 = "America's Game Goes to Vegas: How to bet on the Jeoparty! GOAT";
title2 = "Speed Kills?";
title3 = "But Weight, There’s More";
title4 = "New-Age Moneyball: Breaking Down How Two Low-Budget Teams Made the American League Wild Card Game";
title5 = "Point Centers, a New Breed in the NBA";
title6 = "The New England Patriots: Historical Domination";
title7 = "Blew it All on Luol? Turned off by Mozgov?: Statistical Analysis of 2016 NBA Free Agency";
title8 = "To Hit or Not to Hit: Determining Ideal Shot Locations in Tennis";
title9 = "Decoding The Draft: From Lottery to Lackluster";

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