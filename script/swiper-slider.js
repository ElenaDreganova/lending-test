

new Swiper("#swiper-2", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 24,
    pagination: {
        el: ("#swiper-2 .swiper-custom-pagination"),
        clickable: true,
        renderBullet: function (index, className) {
        return `<div class=${className}>
            <span class="number">${index + 1}</span>
            <span class="line"></span>
            </div>`;
        }
    },
    lazyLoading: true,
    loop: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: "#nav-right",
        prevEl: "#nav-left"
    },
    breakpoints: {
        300: {
            slidesPerView: 1
        },
        800: {
            slidesPerView: 1.5
        },
        1400: {
            slidesPerView: 3
       }
        
    }
});