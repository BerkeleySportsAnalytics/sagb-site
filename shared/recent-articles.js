var el = document.getElementById("recent-articles-src");
var folder = el.getAttribute("folder");

article1 = "heliocentricity.html";
article2 = "redefined-wild-card.html";
article3 = "bubble-basketball.html";
article4 = "three-point-puzzle.html";
article5 = "shooting-percentages.html";
article6 = "let-the-kids-play.html";
article7 = "running-qb.html";
article8 = "running-backs-time.html";
article9 = "covid-small-ball.html";

title1 = "Heliocentricity in the NBA";
title2 = "Let the Kids Play: Exploring the Benefits of an Expanded MLB Postseason and Redefined Wild Card Series";
title3 = "Bubble Basketball: A Brand New Game";
title4 = "The Three Point Puzzle";
title5 = "The NBA Bubble and Shooting Percentages";
title6 = "Let The Kids Play?";
title7 = "Running Quarterbacks: An Advantage or Unsustainable?";
title8 = "Are Running Backs Running Out of Time?";
title9 = "Did COVID Bring Small-ball back to Life?";

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
