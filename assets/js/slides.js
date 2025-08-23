var slideIndex = [];
var slideGroups = [];

window.onload = function() {
  // Find all slideshow containers
  var groups = document.querySelectorAll(".slideshow");

  groups.forEach((group, idx) => {
    // Store reference for later
    slideGroups[idx] = group;

    // Start each slideshow at index 1
    slideIndex[idx] = 1;

    // ✅ Inject Prev/Next buttons automatically
    let prevBtn = document.createElement("a");
    prevBtn.className = "prev";
    prevBtn.innerHTML = "&#10094;";
    prevBtn.onclick = () => plusSlides(-1, idx);

    let nextBtn = document.createElement("a");
    nextBtn.className = "next";
    nextBtn.innerHTML = "&#10095;";
    nextBtn.onclick = () => plusSlides(1, idx);

    group.appendChild(prevBtn);
    group.appendChild(nextBtn);

    // Show the first slide
    showSlides(1, idx);
  });
};

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var slides = slideGroups[no]?.getElementsByClassName("slide");

  // Guard if no slides
  if (!slides || slides.length === 0) {
    console.warn("No slides found for group", no);
    return;
  }

  // Wrap index
  if (n > slides.length) { slideIndex[no] = 1; }
  if (n < 1) { slideIndex[no] = slides.length; }

  // Hide all slides in this group
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show current slide
  slides[slideIndex[no] - 1].style.display = "block";
}