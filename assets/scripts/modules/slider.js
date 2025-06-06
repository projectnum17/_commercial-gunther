const gallery = () => {
    return new Swiper('.gallery__content', {
        speed: 900,
        grabCursor: true,
        spaceBetween: 24,
        slidesPerView: 3,
        navigation: {
            prevEl: '.gallery .btn--prev',
            nextEl: '.gallery .btn--next',
        },
        breakpoints: {
            320: {
                spaceBetween: 15,
                slidesPerView: 1.2,
            },
            768: {
                spaceBetween: 18,
                slidesPerView: 2,
            },
            992: {
                spaceBetween: 24,
                slidesPerView: 3,
            },
        },
    });
};

export default gallery;
