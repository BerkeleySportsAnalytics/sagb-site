var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "icing-the-kicker.html";
article2 = "american-dream.html";
article3 = "framing-the-zone.html";
article4 = "free-throw-factor.html";
article5 = "turning-up-the-heat.html";
article6 = "backwards-k.html";
article7 = "hart-and-soul.html";
article8 = "russell-westbrook-resurgence.html";
article9 = "beyond-whiffs.html";

title1 = "Does Icing the Kicker Even Work?";
title2 = "Swinging into the American Dream: Latin America's WAR at Bat";
title3 = "Framing the Zone: Who, What, Where, and Why";
title4 = "The Free Throw Factor: Is it the Key to Success on the Floor?";
title5 = "Turning Up the Heat: Does Saving Your Best for the Biggest Moments Make You a Better Pitcher?";
title6 = "Backwards Ks: Umpire Performances and How Catchers Change Games";
title7 = "Josh Hart: Hart and Soul of the New York Knicks";
title8 = "Russell Westbrook and His Resurgence with the Denver Nuggets";
title9 = "Beyond Whiffs: Rethinking Pitch Value with BBQ+";

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
