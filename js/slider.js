new Swiper('.reviews__block', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1135: {
      slidesPerView: 3,
    },
  },
  spaceBetween: 15,
  navigation: {
    nextEl: '.reviews__arrow_right',
    prevEl: '.reviews__arrow_left',
  },
});
