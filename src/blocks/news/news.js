import Swiper from "swiper";
import { Navigation } from "swiper/modules";

(() => {

    const swiper = new Swiper('.news__swiper', {
        modules: [Navigation],
        navigation: {
            nextEl: document.querySelector('.news__navigation .custom-navigation__btn_next'),
            prevEl: document.querySelector('.news__navigation .custom-navigation__btn_prev'),
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3.5,
                spaceBetween: 30,
            },
        }
    });     

})();
