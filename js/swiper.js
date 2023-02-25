//swiper
const swiper = new Swiper(".swiper", {
   loop: true,
   navigation: {
      nextEl: ".swiper-button-left",
      prevEl: ".swiper-button-right",
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
   },
});
//swiper
