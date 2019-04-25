"use strict";

Zr.add("./shoppingCart", function (zr, $, perfectscrollbar, datePicker) {
    var shoppingCart = {
        init: function init() {
            shoppingCart.eventsFn.shoppingCartInit();
            shoppingCart.events.addClick();
            shoppingCart.events.minusClick();
        },
        options: {},
        events: {
            // 表格内加减
            addClick: function addClick() {
                $(".add").off("click").on("click", shoppingCart.eventsFn.addFn);
            },
            minusClick: function minusClick() {
                $(".minus").off("click").on("click", shoppingCart.eventsFn.minusFn);
            }
        },
        eventsFn: {
            shoppingCartInit: function shoppingCartInit() {
                datePicker.init({
                    target: '.date-1',
                    type: "range",
                    format: "YYYY-MM-DD"
                });
            },
            // 表格内加减
            addFn: function addFn() {
                console.log($(this).parent(".numbox").find("input").val());
                var n = $(this).parent(".numbox").find("input").val();
                var num = parseInt(n) + 100;
                if (num == 0) {
                    return;
                }
                $(this).parent(".numbox").find("input").val(num);
            },
            minusFn: function minusFn() {
                console.log(2);
                var n = $(this).parent(".numbox").find("input").val();
                var num = parseInt(n) - 100;
                if (num == 0) {
                    return;
                }
                $(this).parent(".numbox").find("input").val(num);
            }

        },
        ajax: {}
    };
    return {
        init: function init() {
            shoppingCart.init();
        }
    };
}, { requires: ["jquery", "perfectscrollbar", "datePicker"] });