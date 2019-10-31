var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "point-centers.html";
article2 = "patriots-historical-domination.html";
article3 = "nba-free-agency-2016.html";
article4 = "to-hit-or-not-to-hit.html";
article5 = "decoding-the-draft.html";
article6 = "which-pick-is-the-best.html";
article7 = "greatest-duke-team.html";
article8 = "lebron-is-still-human.html";
article9 = "impact-of-ronaldo.html";

title1 = "Point Centers, a New Breed in the NBA";
title2 = "The New England Patriots: Historical Domination";
title3 = "Blew it All on Luol? Turned off by Mozgov?: Statistical Analysis of 2016 NBA Free Agency";
title4 = "To Hit or Not to Hit: Determining Ideal Shot Locations in Tennis";
title5 = "Decoding The Draft: From Lottery to Lackluster";
title6 = "Which Pick is the Best?";
title7 = "The Greatest Duke Team of All Time?";
title8 = "LeBron James is Still Human: Why the Lakers are Missing the Playoffs";
title9 = "Analyzing the Impact of Cristiano Ronaldo";

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