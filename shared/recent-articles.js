var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "jokic-mvp.html";
article2 = "afc-east.html";
article3 = "edge.html";
article4 = "march-madness.html";
article5 = "decoding-draft.html";
article6 = "jeff-bezos.html";
article7 = "first-round-fantasy.html";
article8 = "outsiders.html";
article9 = "investing-in-bigmen.html"

title1 = "Nikola Jokic for MVP";
title2 = "AFC Least or AFC Beast?";
title3 = "Getting Edgy Before Day 2";
title4 = "A Sane Retrospective of the Madness of March";
title5 = "Decoding the Draft: NFL Edition";
title6 = "What if Jeff Bezos Bought the Mariners?";
title7 = "Your First Round Fantasy Pick";
title8 = "The Outsiders: Looking at the Statistical Outliers of the NBA";
title9 = "Investing in Bigmen"

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
