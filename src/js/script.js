const navPos = window.pageYOffset;
const nav = document.querySelector("nav");
const mobileNav = document.getElementById("mobile-nav");
const toggleNav = document.getElementById("menu-toggle");
const backdrop = document.getElementById("backdrop-body");

if (navPos > 1) {
  nav.classList.add("scroll-nav");
} else {
  nav.classList.remove("scroll-nav");
}

document.addEventListener("scroll", function () {
  const scrollPos = window.pageYOffset;

  if (scrollPos > 50) {
    nav.classList.add("scroll-nav");
  } else {
    nav.classList.remove("scroll-nav");
  }
});

toggleNav.addEventListener("click", function () {
  mobileNav.classList.toggle("show");
  backdrop.classList.toggle("show");
  document.body.classList.toggle("freeze");

  if (mobileNav.classList.contains("show")) {
    toggleNav.setAttribute("src", "/src/assets/close-menu.svg");
  } else {
    toggleNav.setAttribute("src", "/src/assets/hamburger-menu.svg");
  }
});
