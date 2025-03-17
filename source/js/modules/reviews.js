import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { MOBILE_WIDTH, TABLET_WIDTH, DESKTOP_WIDTH, COMMON_SLIDES_SPEED, REVIEWS_MOBILE_SPACE_BETWEEN, REVIEWS_TABLET_SPACE_BETWEEN, REVIEWS_TABLET_WIDTH, REVIEWS_DESKTOP_SPACE_BETWEEN, REVIEWS_DESKTOP_WIDTH } from './constants';

const SWIPER_CONFIG = {
  speed: COMMON_SLIDES_SPEED,
  spaceBetween: REVIEWS_MOBILE_SPACE_BETWEEN,
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    lockClass: 'disabled',
  },
  centeredSlides: true,
  slidesPerView: 'auto',
  breakpoints: {
    [MOBILE_WIDTH]: {
      spaceBetween: REVIEWS_MOBILE_SPACE_BETWEEN,
    },
    [TABLET_WIDTH]: {
      spaceBetween: REVIEWS_TABLET_SPACE_BETWEEN,
      width: REVIEWS_TABLET_WIDTH,
    },
    [DESKTOP_WIDTH]: {
      spaceBetween: REVIEWS_DESKTOP_SPACE_BETWEEN,
      width: REVIEWS_DESKTOP_WIDTH,
      simulateTouch: false,
    },
  },
};

const initReviewSwiper = () => {
  const swiperElement = document.querySelector('.reviews__swiper');
  const swiperWrapperElement = document.querySelector('.reviews__list');
  const swiperSlider = document.querySelectorAll('.reviews__item');

  if (!swiperElement || !swiperWrapperElement || !swiperSlider) {
    return;
  }

  new Swiper('.reviews__swiper', SWIPER_CONFIG);
};

export default initReviewSwiper;
