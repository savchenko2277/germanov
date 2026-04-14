import Swiper from "swiper";

(() => {

    const swiper = new Swiper('.card__gallery-swiper', {
        spaceBetween: 12,
        slidesPerView: 4,
    });

    const gallery = document.querySelector('.card__gallery');
    const photos = gallery.querySelectorAll('.card__gallery-photo img');

    swiper.slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {

            // убираем active у всех
            photos.forEach(img => img.classList.remove('active'));

            // добавляем нужному
            if (photos[index]) {
                photos[index].classList.add('active');
            }
        });
    });

    const rowsContainer = document.querySelector('.card__content-rows');
    const rowsBtn = document.querySelector('.card__content-rows-btn');

    rowsBtn.addEventListener('click', () => {
        rowsContainer.classList.toggle('active');
        rowsBtn.classList.toggle('active');
    });

})();