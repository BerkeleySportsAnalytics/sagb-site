var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "extraordinary-cal-raleigh.html";
article2 = "ap-poll-hype-train.html";
article3 = "bringing-the-boom.html";
article4 = "beyond-the-hero-moment.html";
article5 = "anatomy-nhl-rebuild.html";
article6 = "hidden-talent.html";
article7 = "chaos-opportunity-podium.html";
article8 = "redefining-nhl-special-teams.html";
article9 = "humanity-in-umpiring.html";

title1 = "Just How Extraordinary Was Cal Raleigh's 2025 Season?";
title2 = "The AP Poll is a Hype Train";
title3 = "Bringing the Boom: Analyzing the Long-Term Effects of Torpedo Bat Usage";
title4 = "Beyond the Hero Moment";
title5 = "The Anatomy of an NHL Rebuild: What Actually Creates a Champion?";
title6 = "Hidden Talent: Using Data to Find Undervalued U23s in Europe's Big 5 Soccer Leagues";
title7 = "Chaos, Opportunity, and the Podium No One Predicted";
title8 = "Redefining the NHL's Special Teams Metrics";
title9 = "Exploring the Humanity in MLB Umpiring";

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
