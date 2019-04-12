var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "park-effects-in-mlb.html";
article2 = "need-for-speed.html";
article3 = "ice-in-their-veins.html";
article4 = "playoff-lebron.html";
article5 = "draft-eligibility.html";
article6 = "park-effects-in-mlb.html";
article7 = "ice-in-their-veins.html";
article8 = "playoff-lebron.html";
article9 = "draft-eligibility.html";

title1 = "Park Effects in the MLB: How Teams are Built by their Stadiums";
title2 = "Need for Speed: How an Increased Pace is Paying Dividends for the Sacramento Kings";
title3 = "Ice In Their Veins: Explaining the Resurgence of the Brooklyn Nets";
title4 = "Playoff LeBron: Fact of Fiction?";
title5 = "Draft Eligibility: One-and-Done or High School?";
title6 = "Park Effects in the MLB: How Teams are Built by their Stadiums";
title7 = "Ice In Their Veins: Explaining the Resurgence of the Brooklyn Nets";
title8 = "Playoff LeBron: Fact of Fiction?";
title9 = "Draft Eligibility: One-and-Done or High School?";

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