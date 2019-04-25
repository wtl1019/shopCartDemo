'use strict';

Zr.add("./main", function (zr, $) {
    var main = {
        init: function init() {

            main.eventsFn.init();
            main.events.addClickChangeTab();
            //非首页页面启用
            main.events.addOverTitleShow();
        },
        options: {},
        events: {
            //搜索框换标签
            addClickChangeTab: function addClickChangeTab() {
                $('.search-title').on('click', function (e) {
                    var list = $('.search-title-item');
                    for (var i = 0; i < list.length; i++) {
                        list[i].classList.remove('selected');
                    }
                    $(e.target).addClass('selected');
                });
            },
            //鼠标悬停展示
            addOverTitleShow: function addOverTitleShow() {
                $('.swiper-header-items:first-child').on('mouseenter', function () {
                    $('.index-new-over-swiper-left-box').css('display', 'block');
                    $('.swiper-header-items:first-child').css('background', '#2A49D8');
                });
                $('.swiper-header-items:nth-child(n+2)').on('mouseenter', function () {
                    $('.index-new-over-swiper-left-box').css('display', 'none');
                    $('.swiper-header-items:first-child').css('background', 'none');
                });
                $('.index-new-over-items-content').on('mouseenter', function () {
                    $('.index-new-over-swiper-left-box').css('display', 'block');
                    $('.swiper-header-items:first-child').css('background', '#2A49D8');
                });
                $('.index-new-over-items-content').on('mouseenter', function () {
                    $('.index-new-over-swiper-left-box').css('display', 'block');
                    $('.swiper-header-items:first-child').css('background', '#2A49D8');
                });
                $('.index-new-over-swiper-left').on('mouseleave', function () {
                    $('.index-new-over-swiper-left-box').css('display', 'none');
                    $('.swiper-header-items:first-child').css('background', 'none');
                });
                $('.index-new-over-swiper-left-box').on('mouseleave', function () {
                    $('.index-new-over-swiper-left-box').css('display', 'none');
                    $('.swiper-header-items:first-child').css('background', 'none');
                });
            }
        },
        eventsFn: {
            init: function init() {}
        },
        ajax: {}
    };
    return {
        init: function init() {
            main.init();
        }
    };
}, { requires: ["jquery"] });