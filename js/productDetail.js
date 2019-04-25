"use strict";

Zr.add("./productDetail", function (zr, $, perfectscrollbar, tab, Swiper) {
    var productDetail = {
        init: function init() {
            productDetail.eventsFn.init();
            productDetail.eventsFn.swiperFn();
        },
        options: {},
        events: {},
        eventsFn: {
            init: function init() {
                tab.init({
                    target: ".zr-tab-card"
                });
            },
            //swiper
            swiperFn: function swiperFn() {
                var galleryTop = new Swiper('.gallery-top', {
                    spaceBetween: 10,
                    loop: true,
                    loopedSlides: 5
                });
                var galleryThumbs = new Swiper('.gallery-thumbs', {
                    spaceBetween: 10,
                    slidesPerView: 4,
                    touchRatio: 0.2,
                    loop: true,
                    loopedSlides: 5, //looped slides should be the same
                    slideToClickedSlide: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                });
                galleryTop.controller.control = galleryThumbs;
                galleryThumbs.controller.control = galleryTop;
            }
        },
        ajax: {}
    };
    return {
        init: function init() {
            productDetail.init();
        }
    };
}, { requires: ["jquery", "perfectscrollbar", "tab", 'swiper'] });