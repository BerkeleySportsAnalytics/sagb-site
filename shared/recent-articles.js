var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "league-competitiveness.html";
article2 = "lsu-iowa.html";
article3 = "mlb-playoffs.html";
article4 = "volleyball-final-four.html";
article5 = "ncaa-nfl.html";
article6 = "beating-the-clock.html";
article7 = "premier-league-transfers.html";
article8 = "penn-iowa-wrestling.html";
article9 = "faa-article.html";

title1 = "Measures of League Competitiveness: What's the Real Farmer's League?";
title2 = "One Superstar or Five Stars?";
title3 = "Styles Make Fights: Predicting the MLB Playoffs with a New Perspective";
title4 = "Predicting the Women's NCAA D1 Volleyball Final Four";
title5 = "NCAA vs NFL: Why are NCAA fans more enthusiastic?";
title6 = "Beating the Clock: Age vs Performance in Professional Tennis";
title7 = "Premier League Summer Transfer Review";
title8 = "Penn State and Iowa: A Look at the Kings of Collegiate Wrestling";
title9 = "When You Forget How to Lose";

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
