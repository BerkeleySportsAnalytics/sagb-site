var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "databall-mvps.html";
article2 = "secrets-cooperstown.html";
article3 = "home-run-derby.html";
article4 = "lefties-mlb.html";
article5 = "womens-volleyball-engagement.html";
article6 = "scalability-ncaa-volleyball.html";
article7 = "age-fine-wine.html";
article8 = "guards-post-up.html";
article9 = "defense-wins-championships.html";

title1 = "The NBA's Databall MVPs, Ranked";
title2 = "Secrets of Cooperstown: How Underlying Advanced Stats Tell the Story of Stardom";
title3 = "Home Run Derby or Crystal Ball?";
title4 = "Lefties Back in Swing: Breaking Down the Impact of Infield Defensive Shifts on MLB Batting Outcomes";
title5 = "Engagement in Women's College Volleyball";
title6 = "The Scalability of Women's NCAA Volleyball";
title7 = "Aging Like Fine Wine";
title8 = "Should Guards be Posting Up More Often?";
title9 = "Do Defenses Really Win Championships?";

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
