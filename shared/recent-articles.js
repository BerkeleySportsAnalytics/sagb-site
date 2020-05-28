var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "cant-stand-the-heat.html";
article2 = "is-injury-prediction-the-next-moneyball.html";
article3 = "clayton-kershaw-playoff-choker.html";
article4 = "jeopardy-to-vegas.html";
article5 = "speed-kills.html";
article6 = "weight-theres-more.html";
article7 = "new-age-moneyball.html";
article8 = "point-centers.html";
article9 = "patriots-historical-domination.html";

title1 = "Can't Stand the Heat?";
title2 = "Is Injury Prediction the Next Moneyball?";
title3 = "Clayton Kershaw: Playoff Choker?";
title4 = "America's Game Goes to Vegas: How to bet on the Jeopardy! GOAT";
title5 = "Speed Kills?";
title6 = "But Weight, There’s More";
title7 = "New-Age Moneyball: Breaking Down How Two Low-Budget Teams Made the American League Wild Card Game";
title8 = "Point Centers, a New Breed in the NBA";
title9 = "The New England Patriots: Historical Domination";

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
