"use strict";

Zr.add("./index", function (zr, $, swiper, popover, modal) {
    var index = {
        init: function init() {
            index.eventsFn.init();
            index.events.addClickChangeTab();
            //首页页面启用
            index.eventsFn.showList();
            //控制弹窗显示
            index.eventsFn.modalFn();
        },
        options: {
            pop: ""
        },
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
            }
        },
        eventsFn: {
            init: function init() {
                new swiper('.swiper-container', {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        autoplay: true //可选选项，自动滑动
                    }
                });
                popover.init({
                    target: '.same-popover',
                    position: 'top'
                });
            },
            showList: function showList() {
                $('.index-new-over-swiper-left-box').css('display', 'block');
                $('.swiper-header-items:first-child').css('background', '#2A49D8');
            },
            modalFn: function modalFn() {
                index.options.pop = modal.init(".zr-modal-warning", {
                    top: "",
                    openCallback: function openCallback() {},
                    closeCallback: function closeCallback() {}
                });
                index.options.pop.show();
            }
        },
        ajax: {}
    };
    return {
        init: function init() {
            index.init();
        }
    };
}, { requires: ["jquery", 'swiper', 'popover', 'modal'] });