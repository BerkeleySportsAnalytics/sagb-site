var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "hands_up.html";
article2 = "mlb-day-night.html";
article3 = "jokic-mvp.html";
article4 = "afc-east.html";
article5 = "edge.html";
article6 = "march-madness.html";
article7 = "decoding-draft.html";
article8 = "jeff-bezos.html";
article9 = "first-round-fantasy.html";

title1 = "Hands Up";
title2 = "Hypothesis Testing MLB Hitters in Day and Night Games";
title3 = "Nikola Jokic for MVP";
title4 = "AFC Least or AFC Beast?";
title5 = "Getting Edgy Before Day 2";
title6 = "A Sane Retrospective of the Madness of March";
title7 = "Decoding the Draft: NFL Edition";
title8 = "What if Jeff Bezos Bought the Mariners?";
title9 = "Your First Round Fantasy Pick";

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
