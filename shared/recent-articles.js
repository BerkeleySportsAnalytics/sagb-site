var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "mlb-day-night.html";
article2 = "jokic-mvp.html";
article3 = "afc-east.html";
article4 = "edge.html";
article5 = "march-madness.html";
article6 = "decoding-draft.html";
article7 = "jeff-bezos.html";
article8 = "first-round-fantasy.html";
article9 = "outsiders.html";

title1 = "Hypothesis Testing MLB Hitters in Day and Night Games";
title2 = "Nikola Jokic for MVP";
title3 = "AFC Least or AFC Beast?";
title4 = "Getting Edgy Before Day 2";
title5 = "A Sane Retrospective of the Madness of March";
title6 = "Decoding the Draft: NFL Edition";
title7 = "What if Jeff Bezos Bought the Mariners?";
title8 = "Your First Round Fantasy Pick";
title9 = "The Outsiders: Looking at the Statistical Outliers of the NBA";

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
