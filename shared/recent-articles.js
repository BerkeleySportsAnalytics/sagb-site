var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "jacob-article-1.html";
article2 = "a-tale-of-two-rebounds.html";
article3 = "does-MLB-have-an-umpire-problem.html";
article4 = "unlucky-penny.html";
article5 = "cj_article_1.html";
article6 = "longhorns-vs-cornhuskers.html";
article7 = "hands_up.html";
article8 = "mlb-day-night.html";
article9 = "jokic-mvp.html";

title1 = "Who is Better Positioned for Success in Their New Role: Scott Harris or J.J. Picollo?";
title2 = "A Tale of Two Rebounds";
title3 = "Does MLB Have an Umpire Problem?";
title4 = "Unlucky Penny";
title5 = "Does MLB Have an Umpire Problem?";
title6 = "Best Offensive Team vs. Best Defensive Team in Women's College Volleyball: Who Should Win?";
title7 = "Hands Up";
title8 = "Hypothesis Testing MLB Hitters in Day and Night Games";
title9 = "Nikola Jokic for MVP";

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
