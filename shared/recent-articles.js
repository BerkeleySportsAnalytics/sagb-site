var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "backwards-k.html";
article2 = "hart-and-soul.html";
article3 = "russell-westbrook-resurgence.html";
article4 = "beyond-whiffs.html";
article5 = "art-of-underdog.html";
article6 = "cracking-nfl-offseason.html";
article7 = "databall-mvps.html";
article8 = "secrets-cooperstown.html";
article9 = "home-run-derby.html";

title1 = "Backwards Ks: Umpire Performances and How Catchers Change Games";
title2 = "Josh Hart: Hart and Soul of the New York Knicks";
title3 = "Russell Westbrook and His Resurgence with the Denver Nuggets";
title4 = "Beyond Whiffs: Rethinking Pitch Value with BBQ+";
title5 = "The Art of the Underdog: Analyzing the Key Characteristics of March Madness Cinderellas";
title6 = "Cracking the NFL Offseason";
title7 = "The NBA's Databall MVPs, Ranked";
title8 = "Secrets of Cooperstown: How Underlying Advanced Stats Tell the Story of Stardom";
title9 = "Home Run Derby or Crystal Ball?";

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
