(function () {
  var src = document.getElementById("footer-src");
  var wrapper = document.getElementById("footer-wrapper");
  if (!wrapper) return;

  var prefix = src && src.getAttribute("folder") === "up" ? "../" : "";
  var year = new Date().getFullYear();

  var socials = [
    { label: "Instagram", icon: "fa-instagram", href: "https://www.instagram.com/sportsanalyticsberkeley/" },
    { label: "Twitter", icon: "fa-twitter", href: "https://twitter.com/sagberkeley" },
    { label: "Facebook", icon: "fa-facebook", href: "https://facebook.com/SportsAnalyticsBerkeley" },
    { label: "Email", icon: "fa-envelope", href: "mailto:sagberkeley@gmail.com" }
  ];

  var socialLinks = socials
    .map(function (s) {
      var external = s.href.indexOf("mailto:") === 0 ? "" : ' target="_blank" rel="noopener noreferrer"';
      return (
        '<li><a class="site-footer-social" href="' + s.href + '"' + external +
        ' aria-label="' + s.label + '" title="' + s.label + '"><i class="fa ' + s.icon + '" aria-hidden="true"></i></a></li>'
      );
    })
    .join("");

  wrapper.innerHTML =
    '<footer class="site-footer">' +
      '<div class="container">' +
        '<div class="site-footer-top">' +
          '<a class="site-footer-logo" href="' + prefix + 'index.html" aria-label="Sports Analytics Group at Berkeley home">' +
            '<img src="' + prefix + 'images/logos_2026/full_white_trans.png" alt="Sports Analytics Group at Berkeley" />' +
          "</a>" +
          '<ul class="site-footer-socials">' + socialLinks + "</ul>" +
        "</div>" +
        '<div class="site-footer-bottom">' +
          '<p class="site-footer-statement">We are a student group acting independently of the University of California. ' +
            "We take full responsibility for our organization and this website.</p>" +
          '<p class="site-footer-copyright">&copy; ' + year + " Sports Analytics Group at Berkeley. All rights reserved.</p>" +
          '<p class="site-footer-credits">' +
            '<a href="https://www.ocf.berkeley.edu" target="_blank" rel="noopener noreferrer">' +
              '<img alt="Hosted by the OCF" src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin.svg" />' +
            "</a>" +
            '<span>Design: <a href="http://html5up.net" target="_blank" rel="noopener noreferrer">HTML5 UP</a></span>' +
          "</p>" +
        "</div>" +
      "</div>" +
    "</footer>";
})();
