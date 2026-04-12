import Swiper from "swiper";
import { Navigation } from "swiper/modules";

(() => {

    const swiper = new Swiper('.reviews__swiper', {
        modules: [Navigation],
        spaceBetween: 20,
        navigation: {
            nextEl: document.querySelector('.reviews__navigation .custom-navigation__btn_next'),
            prevEl: document.querySelector('.reviews__navigation .custom-navigation__btn_prev'),
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            780: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });

})();
