var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "lebron-versus-ronaldo.html";
article2 = "wizards-woes-datta.html";
article3 = "leveon-bell-garrity.html";
article4 = "kawhi-and-danny.html";
article5 = "pat-mahomes-hof.html";
article6 = "powerplay-in-cricket.html";
article7 = "pass-and-passnots.html";
article8 = "college-nba-success.html";
article9 = "nba-kd-team.html";

title1 = "Lebron Vs. Ronaldo";
title2 = "The Wizard Woes";
title3 = "Are the Steelers Better Without Le'Veon Bell?";
title4 = "The Raptor Rapture";
title5 = "Why Patrick Mahomes has an Early Claim to the Hall of Fame";
title6 = "Optimal PowerPlay Strategies in Limited Overs Cricket";
title7 = "The Pass and the Pass Nots";
title8 = "Which College Basketball Program Provides the Best Chance for NBA Success?";
title9 = "There's No KD in Team";

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