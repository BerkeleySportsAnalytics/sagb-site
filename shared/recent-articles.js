var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "penn-iowa-wrestling.html";
article2 = "faa-article.html";
article3 = "pl-article.html";
article4 = "pickleball-article.html";
article5 = "nba-roty.html";
article6 = "screamers-to-tap-ins.html";
article7 = "ligue-1-article.html";
article8 = "two-high.html";
article9 = "homes-away-from-home.html";

title1 = "Penn State and Iowa: A Look at the Kings of Collegiate Wrestling";
title2 = "When You Forget How to Lose";
title3 = "Premier League Transfer Stars and Flops";
title4 = "Invasion of the Pickleheads";
title5 = "How Meaningful is the NBA ROTY Award?";
title6 = "From Screamers to Tap-Ins: The Truth Behind the Evolution of Shot Positioning in Football";
title7 = "Is Ligue 1 Still a Top 5 League?";
title8 = "Two High: Why didn’t it stop Mahomes?";
title9 = "Homes Away From Home";

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
