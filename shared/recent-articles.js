var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "perimeter-or-interior.html";
article2 = "perimeter-problem.html";
article3 = "bottom-to-glory.html";
article4 = "icing-the-kicker.html";
article5 = "american-dream.html";
article6 = "framing-the-zone.html";
article7 = "free-throw-factor.html";
article8 = "turning-up-the-heat.html";
article9 = "backwards-k.html";

title1 = "What is More Important to Winning: Perimeter or Interior Defense?";
title2 = "The NBA's Perimeter Problem";
title3 = "From Bottom to Glory: LA Galaxy’s 1-Year Turnaround from 13th to Champions";
title4 = "Does Icing the Kicker Even Work?";
title5 = "Swinging into the American Dream: Latin America's WAR at Bat";
title6 = "Framing the Zone: Who, What, Where, and Why";
title7 = "The Free Throw Factor: Is it the Key to Success on the Floor?";
title8 = "Turning Up the Heat: Does Saving Your Best for the Biggest Moments Make You a Better Pitcher?";
title9 = "Backwards Ks: Umpire Performances and How Catchers Change Games";

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
