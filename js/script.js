"use strict";
const headerEl = document.querySelector("header");
const menuEL = document.querySelector(".btn-mobile-nav");
const closeEL = document.querySelector(".btn-close-nav");
menuEL.addEventListener("click", function () {
  headerEl.classList.add("nav-open");
});

closeEL.addEventListener("click", function () {
  headerEl.classList.remove("nav-open");
});
