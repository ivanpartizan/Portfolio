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
