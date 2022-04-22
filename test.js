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
  delay: 500,
  origin: "right",
  reset: true,
  distance: "200px",
  duration: 1000,
  rotate: {
    x: 180,
    y: 180,
    // z: 50,
  },
});
ScrollReveal().reveal(".aboutMeText2", {
  delay: 1500,
  origin: "left",
  reset: true,
  distance: "200px",
  duration: 1000,
});
ScrollReveal().reveal(".aboutMeText3", {
  delay: 3500,
  origin: "right",
  distance: "200px",
  duration: 1000,
});

// GSAP
const tl = gsap.timeline({
  defaults: { duration: 1, ease: "power1.out" },
});
tl.fromTo(".skillIcons", { scale: 0 }, { scale: 1, delay: 5 });
tl.fromTo(
  ".icon1",
  { opacity: 0, x: -50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo(
  ".icon2",
  { opacity: 0, x: -50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo(
  ".icon3",
  { opacity: 0, x: -50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo(
  ".icon4",
  { opacity: 0, x: -50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo(
  ".icon5",
  { opacity: 0, x: -50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo(
  ".icon6",
  { opacity: 0, x: 50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo(
  ".icon7",
  { opacity: 0, x: 50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo(
  ".icon8",
  { opacity: 0, x: 50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo(
  ".icon9",
  { opacity: 0, x: -50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
