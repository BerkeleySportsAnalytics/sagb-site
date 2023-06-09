var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "faa-article.html";
article2 = "pl-article.html";
article3 = "pickleball-article.html";
article4 = "nba-roty.html";
article5 = "screamers-to-tap-ins.html";
article6 = "ligue-1-article.html";
article7 = "two-high.html";
article8 = "homes-away-from-home.html";
article9 = "mlb-expansion-draft.html";

title1 = "When You Forget How to Lose";
title2 = "Premier League Transfer Stars and Flops";
title3 = "Invasion of the Pickleheads";
title4 = "How Meaningful is the NBA ROTY Award?";
title5 = "From Screamers to Tap-Ins: The Truth Behind the Evolution of Shot Positioning in Football";
title6 = "Is Ligue 1 Still a Top 5 League?";
title7 = "Two High: Why didn’t it stop Mahomes?";
title8 = "Homes Away From Home";
title9 = "MLB 2023 Expansion Draft: Protected Players’ Lists";

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
