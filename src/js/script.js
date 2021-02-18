const navPos = window.pageYOffset;
const nav = document.querySelector("nav");

if (navPos > 1) {
  nav.classList.add("scroll-nav");
} else {
  nav.classList.remove("scroll-nav");
}

document.addEventListener("scroll", function () {
  const scrollPos = window.pageYOffset;
  console.log(scrollPos)

  if (scrollPos > 50) {
    nav.classList.add("scroll-nav");
  } else {
    nav.classList.remove("scroll-nav");
  }
});
