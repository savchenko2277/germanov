import Swiper from "swiper";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

(() => {

    const swiper = new Swiper('.hero__swiper', {
        modules: [Navigation, EffectFade, Autoplay],
        effect: 'fade',
        autoplay: {
            delay: 5000,
        },
        fadeEffect: { crossFade: true },
        navigation: {
            nextEl: document.querySelector('.hero__navigation .custom-navigation__btn_next'),
            prevEl: document.querySelector('.hero__navigation .custom-navigation__btn_prev'),
        },
    });

})();
