import Swiper from "swiper";
import { Navigation, EffectFade } from "swiper/modules";

(() => {

    const swiper = new Swiper('.hero__swiper', {
        modules: [Navigation, EffectFade],
        effect: 'fade',
        fadeEffect: { crossFade: true },
        navigation: {
            nextEl: document.querySelector('.hero__navigation .custom-navigation__btn_next'),
            prevEl: document.querySelector('.hero__navigation .custom-navigation__btn_prev'),
        },
    });

})();
