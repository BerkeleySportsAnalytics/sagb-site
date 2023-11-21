var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "basketball-genetics.html";
article2 = "fantasy-predictions.html";
article3 = "nfl-combine.html";
article4 = "uswnt-struggles.html";
article5 = "kyle-shanahan.html";
article6 = "quarterback-cost.html";
article7 = "league-competitiveness.html";
article8 = "lsu-iowa.html";
article9 = "mlb-playoffs.html";

title1 = "The Gender of Genetics in Basketball";
title2 = "Fantasy Football: Predicting Wide Receiver Perfomances with Statistics";
title3 = "How Important are NFL Combine Performances?";
title4 = "Struggles of the USWNT: A Deeper Look into the 2023 Women's Wos World Cup";
title5 = "Kyle Shanahan: Mastermind of the Most Electrifying Offensive Scheme in the NFL Today";
title6 = "The Cost (and Dangers) of Buying a Quarterback";
title7 = "Measures of League Competitiveness: What's the Real Farmer's League?";
title8 = "One Superstar or Five Stars?";
title9 = "Styles Make Fights: Predicting the MLB Playoffs with a New Perspective";

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
