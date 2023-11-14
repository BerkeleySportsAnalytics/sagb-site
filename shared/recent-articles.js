var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "quarterback-cost.html";
article2 = "league-competitiveness.html";
article3 = "lsu-iowa.html";
article4 = "mlb-playoffs.html";
article5 = "volleyball-final-four.html";
article6 = "ncaa-nfl.html";
article7 = "beating-the-clock.html";
article8 = "premier-league-transfers.html";
article9 = "penn-iowa-wrestling.html";

title1 = "The Cost (and Dangers) of Buying a Quarterback";
title2 = "Measures of League Competitiveness: What's the Real Farmer's League?";
title3 = "One Superstar or Five Stars?";
title4 = "Styles Make Fights: Predicting the MLB Playoffs with a New Perspective";
title5 = "Predicting the Women's NCAA D1 Volleyball Final Four";
title6 = "NCAA vs NFL: Why are NCAA fans more enthusiastic?";
title7 = "Beating the Clock: Age vs Performance in Professional Tennis";
title8 = "Premier League Summer Transfer Review";
title9 = "Penn State and Iowa: A Look at the Kings of Collegiate Wrestling";

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
