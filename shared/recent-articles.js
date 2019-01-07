var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "nba-threes.html";
article2 = "saban-best-team.html";
article3 = "lebron-versus-ronaldo.html";
article4 = "wizards-woes-datta.html";
article5 = "leveon-bell-garrity.html";
article6 = "kawhi-and-danny.html";
article7 = "pat-mahomes-hof.html";
article8 = "powerplay-in-cricket.html";
article9 = "pass-and-passnots.html";

title1 = "Three is Greater Than Two";
title2 = "Is This Nick Saban's Best Alabama Team Yet";
title3 = "Lebron Vs. Ronaldo";
title4 = "The Wizard Woes";
title5 = "Are the Steelers Better Without Le'Veon Bell?";
title6 = "The Raptor Rapture";
title7 = "Why Patrick Mahomes has an Early Claim to the Hall of Fame";
title8 = "Optimal PowerPlay Strategies in Limited Overs Cricket";
title9 = "The Pass and the Pass Nots";

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