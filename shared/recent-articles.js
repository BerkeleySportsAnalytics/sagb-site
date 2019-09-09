var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "decoding-the-draft.html";
article2 = "which-pick-is-the-best.html";
article3 = "greatest-duke-team.html";
article4 = "lebron-is-still-human.html";
article5 = "impact-of-ronaldo.html";
article6 = "need-for-speed.html";
article7 = "park-effects-in-mlb.html";
article8 = "ice-in-their-veins.html";
article9 = "playoff-lebron.html";

title1 = "Decoding The Draft: From Lottery to Lackluster";
title2 = "Which Pick is the Best?";
title3 = "The Greatest Duke Team of All Time?";
title4 = "LeBron James is Still Human: Why the Lakers are Missing the Playoffs";
title5 = "Analyzing the Impact of Cristiano Ronaldo";
title6 = "Need for Speed: How an Increased Pace is Paying Dividends for the Sacramento Kings";
title7 = "Park Effects in the MLB: How Teams are Built by their Stadiums";
title8 = "Ice In Their Veins: Explaining the Resurgence of the Brooklyn Nets";
title9 = "Playoff LeBron: Fact of Fiction?";

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