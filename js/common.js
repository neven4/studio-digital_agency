// Slider var
var dots = 4;
var sliderElem = document.querySelector(".slider");
var dotElems = sliderElem.querySelectorAll(".slider__dot");
var indicatorElem = sliderElem.querySelector(".slider__indicator");

// Resp Menu var
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

//Menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    document.body.style.cssText = "overflow: hidden";

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    document.body.style.cssText = "overflow: scroll";

    showMenu = false;
  }
}

//Stop body scrolling when menu is open

menu.addEventListener(
  "touchmove",
  function(e) {
    e.preventDefault();
  },
  false
);

// Slider
Array.prototype.forEach.call(dotElems, function(dotElem) {
  dotElem.addEventListener("click", function(e) {
    var currentPos = parseInt(sliderElem.getAttribute("data-pos"));
    var newPos = parseInt(dotElem.getAttribute("data-pos"));
    var newDirection = newPos > currentPos ? "right" : "left";
    var currentDirection = newPos < currentPos ? "right" : "left";
    indicatorElem.classList.remove("slider__indicator--" + currentDirection);
    indicatorElem.classList.add("slider__indicator--" + newDirection);
    sliderElem.setAttribute("data-pos", newPos);
  });
});
