// // Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// // Подключение списка активных модулей
// import { flsModules } from "./modules.js";
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__burger-menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

var searchBox = document.getElementById("headerSearch");
var searchLine = document.getElementById("headerLine");
searchBox.addEventListener("mouseover", hoverSearchOn, false);
searchBox.addEventListener("mouseout", hoverSearchOff, false);
function hoverSearchOn() {
  searchLine.classList.add("activeSearch");
}
function hoverSearchOff() {
  searchLine.classList.remove("activeSearch");
}

$(document).ready(function () {
  $(".header__spoiler-listPerson").slideToggle(300);
  $(".header__spoiler-block-titlePerson").click(function (e) {
    $(".header__spoiler-listMulti")
      .removeClass("activeSpoilerList")
      .slideUp(300);
    $(".header__spoiler-block-titleMulti").removeClass("activeSpoilerList");
    $(".header__spoiler-block-titlePerson").toggleClass("activeSpoilerList");
    $(".header__spoiler-listPerson")
      .toggleClass("activeSpoilerList")
      .slideToggle(300);
  });
  $(".header__spoiler-block-titleMulti").click(function (e) {
    $(".header__spoiler-listPerson")
      .removeClass("activeSpoilerList")
      .slideUp(300);
    $(".header__spoiler-block-titlePerson").removeClass("activeSpoilerList");
    $(".header__spoiler-block-titleMulti").toggleClass("activeSpoilerList");
    $(".header__spoiler-listMulti")
      .toggleClass("activeSpoilerList")
      .slideToggle(300);
  });
});
