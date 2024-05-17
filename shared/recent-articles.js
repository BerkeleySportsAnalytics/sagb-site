var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "one-hand-backhand.html";
article2 = "f1-sustainability.html";
article3 = "fixing-manchester-united.html";
article4 = "defense-strikes-harder.html";
article5 = "transfer-values.html";
article6 = "bowl_or_not.html";
article7 = "skating-dead-legs.html";
article8 = "ncaa-wrapped.html";
article9 = "TotalEclipse.html";

title1 = "One-Handed Backhands: Endangered but not Extinct";
title2 = "F1 and Sustainability - How can a Motorsport Exist in a Climate-Friendly World?";
title3 = "Fixing Manchester United: What Has Been Done And What Should Be Done";
title4 = "When the Defense Strikes Harder";
title5 = "Decoding TransfrMarket: Analyzing Player Values Versus Player Performance";
title6 = "To Bowl or not to Bowl";
title7 = "Skating on Dead Legs: Designing a Search that Prioritizes Player Health and Efficient Travel";
title8 = "NCAA 2013 – 2023 Wrapped: The Best and Worst Games of the Past Decade";
title9 = "The Total Eclipse has Arrived";

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
