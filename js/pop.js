"use strict";

Zr.add("./pop", function (zr, $, modal) {
    var main = {
        options: {
            pop1: "",
            pop2: ""

        },
        init: function init() {
            main.events.init();
            main.eventsFn.init();
        },
        events: {
            init: function init() {
                main.events.checkPhone();
                main.events.checkMessage();
                main.events.checkNumber();
                main.events.modal();
            },
            modal: function modal() {
                $(".btn1").off("click").on("click", main.eventsFn.modalOFn);
                $(".btn2").off("click").on("click", main.eventsFn.modalTFn);

                $(".close1").click(function () {
                    main.options.pop1.hide();
                });
                $(".close2").click(function () {
                    main.options.pop2.hide();
                });
            },
            //校验日均单量
            checkNumber: function checkNumber() {
                $('.number-input').on('blur', function () {
                    var val = $(this).val();
                    var reg = /^\d*$/;
                    if (reg.test(val)) {
                        $(this).siblings('.check-number').text('');
                        return;
                    } else {
                        $(this).siblings('.check-number').text('输入有误');
                        $(this).focus();
                    }
                });
            },
            //校验手机号码
            checkPhone: function checkPhone() {
                $('.phone-input').on('blur', function () {
                    var val = $(this).val();
                    var reg1 = /^1[0-9]{10}$/; /*是否为11位*/
                    var reg2 = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; /*手机号段设置*/
                    if (reg1.test(val) && reg2.test(val)) {
                        $(this).siblings('.check-phone').text('');
                        return;
                    } else {
                        if (val == '') {
                            return;
                        } else {
                            $(this).siblings('.check-phone').text('输入有误');
                            $(this).focus();
                        }
                    }
                });
            },
            //获取短信验证码
            checkMessage: function checkMessage() {
                $('.get-check-btn').on('click', function () {
                    console.log('------------');
                    var obj = $(this);
                    obj.addClass('zr-btn-disable');
                    obj.removeClass('zr-btn-primary');
                    obj.off('click');
                    //会有一秒的延迟执行，建议设置的值比所需值小1
                    var time = 10;
                    var interval = setInterval(function () {
                        if (time != 0) {
                            obj.html(time + ' 秒后重新获取');
                            time = time - 1;
                        } else {
                            obj.html('获取短信验证码');
                            obj.addClass('zr-btn-primary');
                            obj.removeClass('zr-btn-disable');
                            main.events.checkMessage();
                            clearInterval(interval);
                        }
                    }, 1000);
                });
            }
        },
        eventsFn: {
            init: function init() {},
            modalOFn: function modalOFn() {
                main.options.pop1 = modal.init(".require-style-one", {
                    top: "",
                    openCallback: function openCallback() {},
                    closeCallback: function closeCallback() {}
                });
                main.options.pop1.show();
            },
            modalTFn: function modalTFn() {
                main.options.pop2 = modal.init(".require-style-two", {
                    top: "",
                    openCallback: function openCallback() {},
                    closeCallback: function closeCallback() {}
                });
                main.options.pop2.show();
            }
        }
    };
    return {
        init: function init() {
            main.init();
        }
    };
}, { requires: ["jquery", "modal"] });