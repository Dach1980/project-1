import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { MOBILE_WIDTH, TABLET_WIDTH, MOBILE_SLIDES_SPACE_BETWEEN, DESKTOP_WIDTH, MOBILE_SLIDES_PER_GROUP, TABLET_SLIDES_SPEED, TABLET_SLIDES_PER_VIEW, TABLET_SLIDES_SPACE_BETWEEN, TABLET_SLIDES_PER_GROUP, DESKTOP_SLIDES_PER_VIEW, DESKTOP_SLIDES_PER_GROUP, COMMON_SLIDES_SPEED } from './constants';

const SWIPER_CONFIG = {
  speed: COMMON_SLIDES_SPEED,
  loop: true,
  modules: [Navigation],
  navigation: {
    prevEl: '.juri__navigation--before',
    nextEl: '.juri__navigation--forward',
  },

  breakpoints: {
    [MOBILE_WIDTH]: {
      slidesPerView: MOBILE_SLIDES_PER_GROUP,
      spaceBetween: MOBILE_SLIDES_SPACE_BETWEEN,
      centeredSlides: true,
    },
    [TABLET_WIDTH]: {
      speed: TABLET_SLIDES_SPEED,
      slidesPerView: TABLET_SLIDES_PER_VIEW,
      spaceBetween: TABLET_SLIDES_SPACE_BETWEEN,
      slidesPerGroup: TABLET_SLIDES_PER_GROUP,
    },
    [DESKTOP_WIDTH]: {
      speed: TABLET_SLIDES_SPEED,
      slidesPerView: DESKTOP_SLIDES_PER_VIEW,
      spaceBetween: TABLET_SLIDES_SPACE_BETWEEN,
      slidesPerGroup: DESKTOP_SLIDES_PER_GROUP,
      simulateTouch: false,
    },
  },
};

const initJuriSwiper = () => {
  const swiperElement = document.querySelector('.juri__swiper');
  if (!swiperElement) {
    return;
  }

  const swiper = new Swiper('.juri__swiper', SWIPER_CONFIG);

  const updateMargins = (slidesPerGroup) => {
    document.querySelectorAll('.juri__human').forEach((slide, index) => {
      slide.classList.toggle('juri__human--margin', index % slidesPerGroup === 0 && index !== 0);
    });
  };

  const onInitAndUpdate = (slidesPerGroup) => {
    swiper.on('init', () => updateMargins(slidesPerGroup));
    swiper.on('slideChange', () => updateMargins(slidesPerGroup));
    updateMargins(slidesPerGroup);
  };

  if (window.innerWidth >= DESKTOP_WIDTH) {
    onInitAndUpdate(DESKTOP_SLIDES_PER_GROUP);
  } else if (window.innerWidth >= TABLET_WIDTH) {
    onInitAndUpdate(TABLET_SLIDES_PER_GROUP);
  }
};

export default initJuriSwiper;
