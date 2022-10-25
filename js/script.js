$(document).ready(function () {
  $(".sliders").slick({
    prevArrow: '<img  src="img/slider/right.svg" alt="arrows-right">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/slider/left.svg" alt="arrows-right">',
    speed: 1200,
    dots: true,
  });
  // tabs
  const tabHeaders = document.querySelectorAll("[data-tab]");
  const contentBoxes = document.querySelectorAll("[data-tab-content]");

  tabHeaders.forEach(function (item) {
    item.addEventListener("click", function () {
      contentBoxes.forEach(function (item) {
        item.classList.remove("show");
      });
      const contentBox = document.querySelector("#" + this.dataset.tab);
      contentBox.classList.add("show");
    });
  });
  $(function () {
    $("ul.auto__tabs-list").on("click", "li:not(.active)", function () {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest()
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
  //------маска номера
  $.mask.definitions["h"] = "[0|1|3|4|5|6|7|8|9]";
  $(".order__form-input--phone").mask("+7 (999) 999-99-99");
});
//плавная прокрутка к якорю
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
//------скрыть\добавить текст
const btns = document.querySelectorAll(".reviews__column-btn");
for (btn of btns) {
  btn.addEventListener("click", function () {
    const card = this.closest(".reviews__column");

    const dots = card.querySelector(".dots");
    const more = card.querySelector(".more");
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      more.style.display = "none";
      this.textContent = "Читать полностью";
    } else {
      dots.style.display = "none";
      more.style.display = "inline";
      this.textContent = "Скрыть";
    }
  });
}

// скрыть открыть блок(отзывы)
const rewRow1 = document.querySelector(".reviews__column--2");
const rewRow2 = document.querySelector(".reviews__column--3");
const button = document.querySelector("#rev-btn");
const content = document.querySelector("#rev-row");
button.addEventListener("click", function () {
  content.classList.toggle("more");
  rewRow1.classList.toggle("block");
  rewRow2.classList.toggle("block");
  if (content.classList.contains("more")) {
    button.textContent = "Все отзывы";
  } else {
    button.textContent = "Скрыть";
  }
});



/* ================= MOBILE NAV ========================= */
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon");
const mobileNav = document.querySelector(".mobile-nav");
const mobileMenu = document.querySelectorAll(".mobile-link");

mobileNavButton.addEventListener("click", function () {
  mobileNavIcon.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});
for (mobMen of mobileMenu) {
  mobMen.addEventListener("click", function () {
    mobileNavIcon.classList.toggle("active");
    mobileNav.classList.toggle("active");
  });
}
