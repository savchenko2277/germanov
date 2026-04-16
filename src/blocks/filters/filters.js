(() => {

    const filters = document.querySelector('.filters');
    if (!filters) return;

    const close = filters.querySelector('.filters__close');
    close.addEventListener('click', () => {
        filters.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
    
    const filtersOpenBtn = document.querySelector('.catalog-filters__open-btn');

    filtersOpenBtn.addEventListener('click', () => {
        filters.classList.add('active');
        document.body.classList.add('no-scroll');
    });

})();
