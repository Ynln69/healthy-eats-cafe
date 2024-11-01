(() => {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelector(".js-menu-btn")
      .addEventListener("click", function () {
        document.body.classList.toggle("menu-active");
      });
  }),
    window.addEventListener("scroll", function () {
      var e = document.querySelector("header");
      window.scrollY > 0
        ? e.classList.add("active")
        : e.classList.remove("active");
    }),
    document.addEventListener("DOMContentLoaded", function () {
      var e = document.querySelector(".btn-form"),
        t = document.querySelector(".input-holder");
      e.addEventListener("click", function () {
        setTimeout(function () {
          (e.textContent = "Already sent"), t.classList.add("active");
        }, 500);
      });
    });
})();
