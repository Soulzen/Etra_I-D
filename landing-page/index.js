const nav = document.querySelector(".nav")
const navToggle = document.querySelector(".nav-toggle")

function toggleNav() {
  nav.classList.toggle("nav__hidden")
}

navToggle.addEventListener("click", toggleNav)
