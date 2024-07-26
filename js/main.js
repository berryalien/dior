const swiperTop = new Swiper('.top__swiper', {
  effect: 'fade',
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperAbout = new Swiper(".about__slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    });

document.querySelectorAll('.accordeon__triger').forEach((item) => {
  item.addEventListener('click', () => {
  item.parentNode.classList.toggle('accordeon__item--active')
  })
});