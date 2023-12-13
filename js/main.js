var burger = document.querySelector(".burger-menu");
var menu = document.querySelector(".navigation-burger");
var links = document.querySelector(".navigation-burger ul");
var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};
burger.addEventListener("click", toggleMenu);
links.addEventListener("click", toggleMenu);
