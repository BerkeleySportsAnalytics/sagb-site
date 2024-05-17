var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "defense-strikes-harder.html";
article2 = "transfer-values.html";
article3 = "bowl_or_not.html";
article4 = "skating-dead-legs.html";
article5 = "ncaa-wrapped.html";
article6 = "TotalEclipse.html";
article7 = "todd-boehly.html";
article8 = "basketball-genetics.html";
article9 = "fantasy-predictions.html";

title1 = "When the Defense Strikes Harder";
title2 = "Decoding TransfrMarket: Analyzing Player Values Versus Player Performance";
title3 = "To Bowl or not to Bowl";
title4 = "Skating on Dead Legs: Designing a Search that Prioritizes Player Health and Efficient Travel";
title5 = "NCAA 2013 – 2023 Wrapped: The Best and Worst Games of the Past Decade";
title6 = "The Total Eclipse has Arrived";
title7 = "Todd Boehly's New Chelsea";
title8 = "The Gender of Genetics in Basketball";
title9 = "Fantasy Football: Predicting Wide Receiver Perfomances with Statistics";

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
