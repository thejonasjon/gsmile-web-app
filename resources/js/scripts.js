// Custom js
const swiper = new Swiper('.customSwiper', {
    // Optional parameters
    loop: true,
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 30,


    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });