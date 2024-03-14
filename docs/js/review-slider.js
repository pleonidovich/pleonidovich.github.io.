const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: 'true',
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        // when window width is >= 359px
        359: {
            slidesPerView: 1,
            spaceBetween: "40px"
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 2,
            spaceBetween: "50px"
        },
        // when window width is >= 1900px
        1900: {
            slidesPerView: 3,
            spaceBetween: "150px"
        }
    }
});