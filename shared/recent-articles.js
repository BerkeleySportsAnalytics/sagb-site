var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "secrets-cooperstown.html";
article2 = "home-run-derby.html";
article3 = "lefties-mlb.html";
article4 = "womens-volleyball-engagement.html";
article5 = "scalability-ncaa-volleyball.html";
article6 = "age-fine-wine.html";
article7 = "guards-post-up.html";
article8 = "defense-wins-championships.html";
article9 = "battle-of-surfaces.html";

title1 = "Secrets of Cooperstown: How Underlying Advanced Stats Tell the Story of Stardom";
title2 = "Home Run Derby or Crystal Ball?";
title3 = "Lefties Back in Swing: Breaking Down the Impact of Infield Defensive Shifts on MLB Batting Outcomes";
title4 = "Engagement in Women's College Volleyball";
title5 = "The Scalability of Women's NCAA Volleyball";
title6 = "Aging Like Fine Wine";
title7 = "Should Guards be Posting Up More Often?";
title8 = "Do Defenses Really Win Championships?";
title9 = "The Battle of the Surfaces: Determining the Ideal Playstyle for each Tennis Surface";

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
