import Swiper from "swiper";
import { Navigation } from "swiper/modules";

(() => {

    const swiper = new Swiper('.new__swiper', {
        modules: [Navigation],
        navigation: {
            nextEl: document.querySelector('.new__navigation .custom-navigation__btn_next'),
            prevEl: document.querySelector('.new__navigation .custom-navigation__btn_prev'),
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 8,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 16,
            },
        }
    });

})();
