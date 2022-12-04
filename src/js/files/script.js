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

$(document).ready(function () {
  $("#scroll_top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});

// $(document).ready(function () {
//   var quantity = 0;
//   var dec = document.querySelectorAll(".quantityDec");
//   var inc = document.querySelectorAll(".quantityInc");
//   var valueQ = document.querySelectorAll(".quantityValue");
//   console.log(dec);
//   console.log(inc);
//   $(valueQ).html(quantity);
//   $(dec).click(function () {
//     if (quantity > 0) {
//       quantity -= 1;
//     }
//     $(valueQ).html(quantity);
//   });
//   $(inc).click(function () {
//     quantity += 1;
//     $(valueQ).html(quantity);
//   });
// });
$(document).ready(function () {
  $("body").on("click", ".number-minus, .number-plus", function () {
    var $row = $(this).closest(".number");
    var $input = $row.find(".number-text");
    var step = $row.data("step");
    var val = parseFloat($input.val());
    if ($(this).hasClass("number-minus")) {
      val -= step;
    } else {
      val += step;
    }
    $input.val(val);
    $input.change();
    return false;
  });

  $("body").on("change", ".number-text", function () {
    var $input = $(this);
    var $row = $input.closest(".number");
    var step = $row.data("step");
    var min = parseInt($row.data("min"));
    var max = parseInt($row.data("max"));
    var val = parseFloat($input.val());
    if (isNaN(val)) {
      val = step;
    } else if (min && val < min) {
      val = min;
    } else if (max && val > max) {
      val = max;
    }
    $input.val(val);
  });
});



$(document).ready(function () {
    $("body").on("click", ".checkLike", function () {
      $(this).toggleClass("redLike");
    });

  // $(".header__spoiler-block-titlePerson").click(function (e) {

  // });
  // $(".header__spoiler-block-titleMulti").click(function (e) {
  //   $(".header__spoiler-listPerson")
  //     .removeClass("activeSpoilerList")
  //     .slideUp(300);
  //   $(".header__spoiler-block-titlePerson").removeClass("activeSpoilerList");
  //   $(".header__spoiler-block-titleMulti").toggleClass("activeSpoilerList");
  //   $(".header__spoiler-listMulti")
  //     .toggleClass("activeSpoilerList")
  //     .slideToggle(300);
  // });
});