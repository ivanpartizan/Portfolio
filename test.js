const navBar = document.querySelector("#navBar");
const menuBtn = document.querySelector(".menuIcon");
const closeBtn = document.querySelector(".closeIcon");

menuBtn.addEventListener("click", () => {
  navBar.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  navBar.classList.remove("show");
});

const nav = document.querySelectorAll(".navBar");
function takeAction() {
  navBar.classList.remove("show");
}
nav.forEach((link) => link.addEventListener("click", takeAction));

// Header shadow on scroll
function boxShadow() {
  const scrollHeader = document.querySelector("#header");
  if (this.scrollY > 85) scrollHeader.classList.add("headerActive");
  else scrollHeader.classList.remove("headerActive");
}

window.addEventListener("scroll", boxShadow);

// typed.js
let optionsOne = {
  strings: ["Hello, my name is", "Hola, me llamo"],
  typeSpeed: 100,
  backSpeed: 20,
  loop: true,
};
let optionsTwo = {
  strings: ["Welcome to my website!", "Bienvenidos a mi página web!"],
  typeSpeed: 100,
  backSpeed: 20,
  loop: true,
};

let typedOne = new Typed(".typedOne", optionsOne);
let typedTwo = new Typed(".typedTwo", optionsTwo);

// scrollreveal
ScrollReveal().reveal(".aboutMeText", {
  origin: "left",
  distance: "200px",
  delay: 500,
  duration: 1000,
  reset: true,
});
ScrollReveal().reveal(".aboutMeText2", {
  origin: "right",
  distance: "200px",
  delay: 1000,
  duration: 1000,
  reset: true,
});
ScrollReveal().reveal(".aboutMeText3", {
  origin: "bottom",
  distance: "200px",
  delay: 1500,
  duration: 1000,
  reset: true,
});
ScrollReveal().reveal(".myImageBox", {
  origin: "right",
  distance: "200px",
  delay: 2500,
  duration: 1000,
  rotate: {
    x: 180,
    y: 180,
  },
  reset: true,
});
