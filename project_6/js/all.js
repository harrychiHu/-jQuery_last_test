$(document).ready(function () {
  $(".drop_down").click(function (e) {
    e.preventDefault();
    $(this).parent().siblings().find("ul").slideUp();
    $(this).parent().find("ul").slideToggle();
  });

  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    effect: "coverflow",
    speed: 600,
    autoplay: {
      delay: 3000,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
});
