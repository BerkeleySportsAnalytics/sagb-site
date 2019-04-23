var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "need-for-speed.html";
article2 = "park-effects-in-mlb.html";
article3 = "ice-in-their-veins.html";
article4 = "playoff-lebron.html";
article5 = "draft-eligibility.html";
article6 = "bracket-hack-it.html";
article7 = "what-it-takes-to-win-in-march.html";
article8 = "trash-or-treasure.html";
article9 = "rich-hill.html";

title1 = "Need for Speed: How an Increased Pace is Paying Dividends for the Sacramento Kings";
title2 = "Park Effects in the MLB: How Teams are Built by their Stadiums";
title3 = "Ice In Their Veins: Explaining the Resurgence of the Brooklyn Nets";
title4 = "Playoff LeBron: Fact of Fiction?";
title5 = "Draft Eligibility: One-and-Done or High School?";
title6 = "Bracket Hack-it: Statistical Guide to March Madness";
title7 = "Stop the Madness: What it Takes to Win in March";
title8 = "Trash or Treasure? An Analysis of NBA Second Round Picks";
title9 = "The Rich Hill Fiasco";

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