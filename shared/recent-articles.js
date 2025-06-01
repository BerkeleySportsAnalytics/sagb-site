var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "bottom-to-glory.html";
article2 = "icing-the-kicker.html";
article3 = "american-dream.html";
article4 = "framing-the-zone.html";
article5 = "free-throw-factor.html";
article6 = "turning-up-the-heat.html";
article7 = "backwards-k.html";
article8 = "hart-and-soul.html";
article9 = "russell-westbrook-resurgence.html";

title1 = "From Bottom to Glory: LA Galaxy’s 1-Year Turnaround from 13th to Champions";
title2 = "Does Icing the Kicker Even Work?";
title3 = "Swinging into the American Dream: Latin America's WAR at Bat";
title4 = "Framing the Zone: Who, What, Where, and Why";
title5 = "The Free Throw Factor: Is it the Key to Success on the Floor?";
title6 = "Turning Up the Heat: Does Saving Your Best for the Biggest Moments Make You a Better Pitcher?";
title7 = "Backwards Ks: Umpire Performances and How Catchers Change Games";
title8 = "Josh Hart: Hart and Soul of the New York Knicks";
title9 = "Russell Westbrook and His Resurgence with the Denver Nuggets";

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
