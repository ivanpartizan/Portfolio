function boxShadow() {
  const scrollHeader = document.getElementById("header");

  if (this.scrollY >= 80) scrollHeader.classList.add("headerActive");
  else scrollHeader.classList.remove("headerActive");
}

window.addEventListener("scroll", boxShadow);
