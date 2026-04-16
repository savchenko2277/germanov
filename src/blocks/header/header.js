(() => {

    const header = document.querySelector(".header");

    if (!header) return;

    const headerBurger = header.querySelector(".header__burger");
    const headerCatalogBtn = header.querySelector(".header__middle .header__catalog-btn");

    const headerCatalog = header.querySelector(".header__catalog_pc");
    const headerCatalogClose = headerCatalog.querySelector(".header__catalog-close");

    const headerCatalogBtnMobile = header.querySelector(".header__catalog-wrapper .header__catalog-btn");
    const headerCatalogWrapper = header.querySelector(".header__catalog-wrapper");

    headerCatalogBtnMobile.addEventListener("click", () => {
        headerCatalogWrapper.classList.toggle("active");
    })

    headerCatalogClose.addEventListener("click", () => {
        headerCatalog.classList.remove("active");
        document.body.classList.remove("no-scroll");
    })

    headerCatalogBtn.addEventListener("click", () => {
        if (header.classList.contains("is-open")) {
            header.classList.remove("is-open");
            headerCatalog.classList.add("active");
        } else {
            headerCatalog.classList.add("active");
            document.body.classList.add("no-scroll");
        }
    });

    headerBurger.addEventListener("click", () => {

        if (header.classList.contains("is-open")) {
            header.classList.remove("is-open");
            document.body.classList.remove("no-scroll");
        } else {
            header.classList.add("is-open");
            document.body.classList.add("no-scroll");
        }
    });

})();
