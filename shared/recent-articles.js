var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "soccer-losing-excitement.html";
article2 = "one-hand-backhand.html";
article3 = "f1-sustainability.html";
article4 = "fixing-manchester-united.html";
article5 = "defense-strikes-harder.html";
article6 = "transfer-values.html";
article7 = "bowl_or_not.html";
article8 = "skating-dead-legs.html";
article9 = "ncaa-wrapped.html";

title1 = "Is Soccer Losing its Excitement?";
title2 = "One-Handed Backhands: Endangered but not Extinct";
title3 = "F1 and Sustainability - How can a Motorsport Exist in a Climate-Friendly World?";
title4 = "Fixing Manchester United: What Has Been Done And What Should Be Done";
title5 = "When the Defense Strikes Harder";
title6 = "Decoding TransfrMarket: Analyzing Player Values Versus Player Performance";
title7 = "To Bowl or not to Bowl";
title8 = "Skating on Dead Legs: Designing a Search that Prioritizes Player Health and Efficient Travel";
title9 = "NCAA 2013 – 2023 Wrapped: The Best and Worst Games of the Past Decade";

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
