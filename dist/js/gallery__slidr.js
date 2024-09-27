var swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 1000,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,

});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  speed: 1000,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  autoplay: {
    delay: 5000,
  },
});
