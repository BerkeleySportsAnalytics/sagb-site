var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "fantasy-predictions.html";
article2 = "nfl-combine.html";
article3 = "uswnt-struggles.html";
article4 = "kyle-shanahan.html";
article5 = "quarterback-cost.html";
article6 = "league-competitiveness.html";
article7 = "lsu-iowa.html";
article8 = "mlb-playoffs.html";
article9 = "volleyball-final-four.html";

title1 = "Fantasy Football: Predicting Wide Receiver Perfomances with Statistics";
title2 = "How Important are NFL Combine Performances?";
title3 = "Struggles of the USWNT: A Deeper Look into the 2023 Women's Wos World Cup";
title4 = "Kyle Shanahan: Mastermind of the Most Electrifying Offensive Scheme in the NFL Today";
title5 = "The Cost (and Dangers) of Buying a Quarterback";
title6 = "Measures of League Competitiveness: What's the Real Farmer's League?";
title7 = "One Superstar or Five Stars?";
title8 = "Styles Make Fights: Predicting the MLB Playoffs with a New Perspective";
title9 = "Predicting the Women's NCAA D1 Volleyball Final Four";

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
