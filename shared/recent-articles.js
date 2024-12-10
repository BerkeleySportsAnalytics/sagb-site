var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "scalability-ncaa-volleyball.html";
article2 = "age-fine-wine.html";
article3 = "guards-post-up.html";
article4 = "defense-wins-championships.html";
article5 = "battle-of-surfaces.html";
article6 = "set-rotate-dominate.html";
article7 = "set-rotate-dominate.html";
article8 = "wrestling-not-dangerous.html";
article9 = "basketball-mvp-tracker.html";

title1 = "The Scalability of Women's NCAA Volleyball";
title2 = "Aging Like Fine Wine";
title3 = "Should Guards be Posting Up More Often?";
title4 = "Do Defenses Really Win Championships?";
title5 = "The Battle of the Surfaces: Determining the Ideal Playstyle for each Tennis Surface";
title6 = "Set, Rotate, Dominate";
title7 = "Set, Rotate, Dominate";
title8 = "Why Wrestling is Not as Dangerous As You Think";
title9 = "An Analysis of Basketball Reference's MVP Tracker";

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
