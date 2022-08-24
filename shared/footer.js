var el = document.getElementById("footer-src");
var folder = el.getAttribute("folder");


var index_file = folder == "up" ? "../index.html" : "index.html"
var image_file = folder == "up" ? "../images/logo1.png" : "images/logo1.png"

var string = `    
          <footer class="container" id="footer">
            <div class="row">
              <div class="col-6 col-12-medium imp-medium">
              <!-- Contact -->
              <section>
                <h2>Get in touch</h2>
              </section>
              <div>
                <div class="row">
                  <div class="col-8 col-12-medium">
                    <dl class="contact tab">
                      <dt><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sportsanalyticsberkeley/" class="fa fa-instagram"></a></dt>
                      <dt><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/sagberkeley" class="fa fa-twitter"></a></dt>
                      <dt><a target="_blank" rel="noopener noreferrer" href="https://facebook.com/SportsAnalyticsBerkeley" class="fa fa-facebook"></a></dt>
                      <dt><a target="_blank" rel="noopener noreferrer" href="mailto:sagberkeley@gmail.com" class="fa fa-envelope"></a></dt>
                    </dl>
                  </div>
                </div>
              </div>

              </div>
              <div class="col-1 col-12-small hide-mobile">
                <span> </span>
              </div>
              <div class="col-3 col-12-small hide-mobile">
                <img class="footer-image" src=`+image_file+` />
              </div>
              <div class="col-12">
                <div id="copyright">
                  <ul class="menu">
                    <li>All rights reserved.</li><li>Design: <a target="_blank" rel="noopener noreferrer" href="http://html5up.net">HTML5 UP</a></li>
                    <li>
                      <a href="https://www.ocf.berkeley.edu">
                        <img alt="Hosted by the OCF" src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin.svg" style="border: 0; height: 30px"/>
                      </a>
                    </li>
                    <li>
                      We are a student group acting independently of the University of California. We take full responsibility for our organization and this web site.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div></footer>`

document.getElementById("footer-wrapper").innerHTML = string;