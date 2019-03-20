var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "what-it-takes-to-win-in-march.html";
article2 = "trash-or-treasure.html";
article3 = "rich-hill.html";
article4 = "sexist-not-economics.html";
article5 = "serves-in-tennis.html";
article6 = "nba-threes.html";
article7 = "saban-best-team.html";
article8 = "lebron-versus-ronaldo.html";
article9 = "wizards-woes-datta.html";

title1 = "Stop the Madness: What it Takes to Win in March";
title2 = "Trash or Treasure? An Analysis of NBA Second Round Picks";
title3 = "The Rich Hill Fiasco";
title4 = "It's Not Sexist, It's Economics";
title5 = "Servin' Up Dubs";
title6 = "Three is Greater Than Two";
title7 = "Is This Nick Saban's Best Alabama Team Yet";
title8 = "Lebron Vs. Ronaldo";
title9 = "The Wizard Woes";

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