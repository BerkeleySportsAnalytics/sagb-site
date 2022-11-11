var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "cj_article_1.html";
article2 = "longhorns-vs-cornhuskers.html";
article3 = "hands_up.html";
article4 = "mlb-day-night.html";
article5 = "jokic-mvp.html";
article6 = "afc-east.html";
article7 = "edge.html";
article8 = "march-madness.html";
article9 = "decoding-draft.html";

title1 = "Does MLB Have an Umpire Problem?";
title2 = "Best Offensive Team vs. Best Defensive Team in Women's College Volleyball: Who Should Win?";
title3 = "Hands Up";
title4 = "Hypothesis Testing MLB Hitters in Day and Night Games";
title5 = "Nikola Jokic for MVP";
title6 = "AFC Least or AFC Beast?";
title7 = "Getting Edgy Before Day 2";
title8 = "A Sane Retrospective of the Madness of March";
title9 = "Decoding the Draft: NFL Edition";

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
