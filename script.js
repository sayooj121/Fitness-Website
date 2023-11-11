const header = document.querySelector(".header");

const images = ["img/home-bg-slider-img1.jpg", "img/home-bg-slider-img2.jpg"];
let currentIndex = 0;

function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length;
  const nextImage = images[currentIndex];

  // Change the background image of the header element
  header.style.backgroundImage = `url(${nextImage})`;
}

// Change the background every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 3000);

// for navbar
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY >= document.querySelector(".header").offsetHeight) {
    navbar.classList.add("visible");
  } else {
    navbar.classList.remove("visible");
  }
});
