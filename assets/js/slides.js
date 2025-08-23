var slideIndex = [1,1,1];
var slideId = ["slide", "slide2", "slide3"];

window.onload = function() {
  showSlides(1, 0);
  showSlides(1, 1);
  showSlides(1, 2);
};

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);

  // Skip if no slides exist for this group
  if (!x || x.length === 0) {
    console.warn("No slides found for:", slideId[no]);
    return;
  }

  // Wrap around if n is out of bounds
  if (n > x.length) { slideIndex[no] = 1; }    
  if (n < 1) { slideIndex[no] = x.length; }

  // Hide all slides in this group
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  // Double-check index safety before showing
  var current = x[slideIndex[no]-1];
  if (current) {
    current.style.display = "block";
  }
}