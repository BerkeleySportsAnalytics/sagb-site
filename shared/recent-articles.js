var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "beating-the-clock.html";
article2 = "premier-league-transfers.html";
article3 = "penn-iowa-wrestling.html";
article4 = "faa-article.html";
article5 = "pl-article.html";
article6 = "pickleball-article.html";
article7 = "nba-roty.html";
article8 = "screamers-to-tap-ins.html";
article9 = "ligue-1-article.html";

title1 = "Beating the Clock: Age vs Performance in Professional Tennis";
title2 = "Premier League Summer Transfer Review";
title3 = "Penn State and Iowa: A Look at the Kings of Collegiate Wrestling";
title4 = "When You Forget How to Lose";
title5 = "Premier League Transfer Stars and Flops";
title6 = "Invasion of the Pickleheads";
title7 = "How Meaningful is the NBA ROTY Award?";
title8 = "From Screamers to Tap-Ins: The Truth Behind the Evolution of Shot Positioning in Football";
title9 = "Is Ligue 1 Still a Top 5 League?";

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
