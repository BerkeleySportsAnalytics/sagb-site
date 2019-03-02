var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "trash-or-treasure.html";
article2 = "rich-hill.html";
article3 = "sexist-not-economics.html";
article4 = "serves-in-tennis.html";
article5 = "nba-threes.html";
article6 = "saban-best-team.html";
article7 = "lebron-versus-ronaldo.html";
article8 = "wizards-woes-datta.html";
article9 = "leveon-bell-garrity.html";

title1 = "Trash or Treasure? An Analysis of NBA Second Round Picks";
title2 = "The Rich Hill Fiasco";
title3 = "It's Not Sexist, It's Economics";
title4 = "Servin' Up Dubs";
title5 = "Three is Greater Than Two";
title6 = "Is This Nick Saban's Best Alabama Team Yet";
title7 = "Lebron Vs. Ronaldo";
title8 = "The Wizard Woes";
title9 = "Are the Steelers Better Without Le'Veon Bell?";

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