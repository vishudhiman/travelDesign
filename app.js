const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

const opacity = 0.4;
// Set first image opacity
imgs[0].style.opacity = opacity;
// Using Es-6 Destructuring
//const  [current,imgs]=[document.querySelector('#current'),document.querySelectorAll('.imgs img')]

imgs.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  // Reset the opcaity
  imgs.forEach((img) => (img.style.opacity = 1));
  // change the current img to clicked image
  current.src = e.target.src;
  // Add fading class
  current.classList.add("fade-in");
  // Remove the Fade in class .5
  setTimeout(() => current.classList.remove("fade-in"), 500);
  // change the opacity to opacity var
  e.target.style.opacity = opacity;
}
