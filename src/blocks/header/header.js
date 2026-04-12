(() => {

    const header = document.querySelector(".header");

    if (!header) return;

    const headerBurger = header.querySelector(".header__burger");
    const headerCatalogBtns = header.querySelectorAll(".header__catalog-btn");

    const headerCatalog = header.querySelector(".header__catalog");
    const headerCatalogClose = header.querySelector(".header__catalog-close");

    headerCatalogClose.addEventListener("click", () => {
        headerCatalog.classList.remove("active");
        document.body.classList.remove("no-scroll");
    })

    headerCatalogBtns.forEach(headerCatalogBtn => {
        headerCatalogBtn.addEventListener("click", () => {
            if (header.classList.contains("is-open")) {
                header.classList.remove("is-open");
                headerCatalog.classList.add("active");
            } else {
                headerCatalog.classList.add("active");
                document.body.classList.add("no-scroll");
            }
        });
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
