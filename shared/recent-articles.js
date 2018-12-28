var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "saban-best-team.html";
article2 = "lebron-versus-ronaldo.html";
article3 = "wizards-woes-datta.html";
article4 = "leveon-bell-garrity.html";
article5 = "kawhi-and-danny.html";
article6 = "pat-mahomes-hof.html";
article7 = "powerplay-in-cricket.html";
article8 = "pass-and-passnots.html";
article9 = "college-nba-success.html";

title1 = "Is This Nick Saban's Best Alabama Team Yet";
title2 = "Lebron Vs. Ronaldo";
title3 = "The Wizard Woes";
title4 = "Are the Steelers Better Without Le'Veon Bell?";
title5 = "The Raptor Rapture";
title6 = "Why Patrick Mahomes has an Early Claim to the Hall of Fame";
title7 = "Optimal PowerPlay Strategies in Limited Overs Cricket";
title8 = "The Pass and the Pass Nots";
title9 = "Which College Basketball Program Provides the Best Chance for NBA Success?";

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