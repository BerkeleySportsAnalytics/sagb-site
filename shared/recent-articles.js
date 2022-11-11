var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "a-tale-of-two-rebounds.html";
article2 = "does-MLB-have-an-umpire-problem.html";
article3 = "unlucky-penny.html";
article4 = "cj_article_1.html";
article5 = "longhorns-vs-cornhuskers.html";
article6 = "hands_up.html";
article7 = "mlb-day-night.html";
article8 = "jokic-mvp.html";
article9 = "afc-east.html";

title1 = "A Tale of Two Rebounds";
title2 = "Does MLB Have an Umpire Problem?";
title3 = "Unlucky Penny";
title4 = "Does MLB Have an Umpire Problem?";
title5 = "Best Offensive Team vs. Best Defensive Team in Women's College Volleyball: Who Should Win?";
title6 = "Hands Up";
title7 = "Hypothesis Testing MLB Hitters in Day and Night Games";
title8 = "Nikola Jokic for MVP";
title9 = "AFC Least or AFC Beast?";

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
