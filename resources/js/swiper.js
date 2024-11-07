import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

new Swiper('#main-slider', {
  modules: [Autoplay, EffectFade],
  loop: true,
  effect: 'fade',

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

new Swiper('#testimonial-slider', {
  modules: [Autoplay],
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
