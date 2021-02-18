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

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("show");
  backdrop.classList.remove("show");

  toggleNav.setAttribute("src", "/src/assets/hamburger-menu.svg");
});

$(".regular").slick({
  // dots: true,
  // infinite: true,
  // slidesToShow: 3,
  // slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  focusOnSelect: true,
});
