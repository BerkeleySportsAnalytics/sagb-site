var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "hart-and-soul.html";
article2 = "russell-westbrook-resurgence.html";
article3 = "beyond-whiffs.html";
article4 = "art-of-underdog.html";
article5 = "cracking-nfl-offseason.html";
article6 = "databall-mvps.html";
article7 = "secrets-cooperstown.html";
article8 = "home-run-derby.html";
article9 = "lefties-mlb.html";

title1 = "Josh Hart: Hart and Soul of the New York Knicks";
title2 = "Russell Westbrook and His Resurgence with the Denver Nuggets";
title3 = "Beyond Whiffs: Rethinking Pitch Value with BBQ+";
title4 = "The Art of the Underdog: Analyzing the Key Characteristics of March Madness Cinderellas";
title5 = "Cracking the NFL Offseason";
title6 = "The NBA's Databall MVPs, Ranked";
title7 = "Secrets of Cooperstown: How Underlying Advanced Stats Tell the Story of Stardom";
title8 = "Home Run Derby or Crystal Ball?";
title9 = "Lefties Back in Swing: Breaking Down the Impact of Infield Defensive Shifts on MLB Batting Outcomes";

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
