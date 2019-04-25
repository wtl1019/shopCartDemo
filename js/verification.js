"use strict";

Zr.add("./verification", function (zr, $) {
    var verification = {
        init: function init() {
            verification.events.checkCustomerName();
            verification.events.checkContactName();
            verification.events.checkDetailAddr();
            verification.events.checkAreaSelect();
            verification.events.checkProviceSelect();
            verification.events.checkCitySelect();
            verification.events.checkDistrictSelect();
            verification.events.clickGet();
            verification.events.checkPhone();
            verification.events.checkEmail();
        },
        events: {
            clickGet: function clickGet() {
                $(".multiInput .zr-btn-primary").click(function () {
                    $(".multiInput .zr-btn-disable").show();
                    $(".multiInput .zr-btn-primary").hide();
                    var odiv = document.getElementById("num");
                    var count = odiv.innerText;
                    odiv.innerHTML = count;
                    var timer = null;
                    timer = setInterval(function () {
                        if (count > 0) {
                            count = count - 1;
                            odiv.innerHTML = count;
                        } else {
                            clearInterval(timer);
                        }
                    }, 1000);
                });
            },

            //文本框判空及非法输入
            checkCustomerName: function checkCustomerName() {
                $("#customerName").blur(function () {
                    var v = $("#customerName").val();
                    var p = /^(?!_)(?![0-9])(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+(\s*[a-zA-Z0-9_\u4e00-\u9fa5]+)$/; //只含有汉字、数字、字母、下划线不能以下划线开头和结尾，中间可以有空格
                    var p1 = /^[a-zA-Z0-9_\s]*$/;
                    if (!p.test(v)) {
                        $(".customerNameP").show();
                        $("#customerName").css("border-color", "red");
                        //return false;
                    } else {
                        $(".customerNameP").hide();
                        $("#customerName").css("border-color", "blue");
                        //return true;
                    }
                });
            },
            checkContactName: function checkContactName() {
                $("#contactName").blur(function () {
                    var v = $("#contactName").val();
                    var p = /^(?!_)(?![0-9])(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+(\s*[a-zA-Z0-9_\u4e00-\u9fa5]+)$/; //只含有汉字、数字、字母、下划线不能以下划线开头和结尾，中间可以有空格
                    var p1 = /^[a-zA-Z0-9_\s]*$/;
                    if (!p.test(v)) {
                        $(".contactNameP").show();
                        $("#contactName").css("border-color", "red");
                        //return false;
                    } else {
                        $(".contactNameP").hide();
                        $("#contactName").css("border-color", "blue");
                        //return true;
                    }
                });
            },
            checkDetailAddr: function checkDetailAddr() {
                $("#detailAddr").blur(function () {
                    var v = $("#detailAddr").val();
                    var p = /^(?!_)(?![0-9])(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+(\s*[a-zA-Z0-9_\u4e00-\u9fa5]+)$/; //只含有汉字、数字、字母、下划线不能以下划线开头和结尾，中间可以有空格
                    var p1 = /^[a-zA-Z0-9_\s]*$/;
                    if (!p.test(v)) {
                        $(".detailAddrP").show();
                        $("#detailAddr").css("border-color", "red");
                        //return false;
                    } else {
                        $(".detailAddrP").hide();
                        $("#detailAddr").css("border-color", "blue");
                        //return true;
                    }
                });
            },
            /*select校验*/
            checkAreaSelect: function checkAreaSelect() {
                $(".selectInput1 .zr-select-content dd").click(function () {
                    var v = $(".selectInput1 .zr-input").val();
                    //alert(v)
                    if ("所属地区" == v || "" == v) {
                        $(".areaSelectP").show();
                        $(".selectInput1 .zr-input").css("border-color", "red");
                        //return false;
                    } else {
                        $(".areaSelectP").hide();
                        $(".selectInput1 .zr-input").css("border-color", "blue");
                        //return true;
                    }
                });
            },
            checkProviceSelect: function checkProviceSelect() {
                $(".proviceSelect .zr-select-content dd").click(function () {
                    var v = $(".proviceSelect .zr-input").val();
                    if ("省" == v || "" == v) {
                        $(".addressP").show();
                        $(".proviceSelect .zr-input").css("border-color", "red");
                        //return false;
                    } else {
                        $(".addressP").hide();
                        $(".proviceSelect .zr-input").css("border-color", "blue");
                        //return true;
                    }
                });
            },
            checkCitySelect: function checkCitySelect() {
                $(".citySelect .zr-select-content dd").click(function () {
                    var v = $(".citySelect .zr-input").val();
                    if ("市" == v || "" == v) {
                        $(".addressP").show();
                        $(".citySelect .zr-input").css("border-color", "red");
                        //return false;
                    } else {
                        $(".addressP").hide();
                        $(".citySelect .zr-input").css("border-color", "blue");
                        //return true;
                    }
                });
            },
            checkDistrictSelect: function checkDistrictSelect() {
                $(".districtSelect .zr-select-content dd").click(function () {
                    var v = $(".districtSelect .zr-input").val();
                    if ("区" == v || "" == v) {
                        $(".addressP").show();
                        $(".districtSelect .zr-input").css("border-color", "red");
                        //return false;
                    } else {
                        $(".addressP").hide();
                        $(".districtSelect .zr-input").css("border-color", "blue");
                        //return true;
                    }
                });
            },

            //验证手机号码
            checkPhone: function checkPhone() {
                $("#phoneNum").blur(function () {
                    var phone = $("#phoneNum").val(); //获取输入的手机号
                    var pattern = /^1[0-9]{10}$/; /*是否为11位*/

                    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; /*手机号段设置*/

                    //不满足11位条件时，给出提醒
                    if (!pattern.test(phone) || !myreg.test(phone)) {
                        //test() 方法用于检测一个字符串是否匹配某个模式.如果字符串中有匹配的值返回 true,否则返回 false。
                        $(".phoneNumP").show();
                        $("#phoneNum").css("border-color", "red");
                        //return false;
                    } else {
                        $(".phoneNumP").hide();
                        $("#phoneNum").css("border-color", "blue");
                        //return true;
                    }
                });
            },

            //验证邮箱  test@hotmail.com   32_w1@sima.vip.com   te-st@qq.com.cn   te.._st@sima-.vip.com   21@s.qf.qq.com
            checkEmail: function checkEmail() {
                $("#email").blur(function () {
                    var v = $("#email").val();
                    var p = /^[a-zA-Z0-9]+([_.-][a-zA-Z0-9]+)*@([a-zA-Z0-9]+[-_.]?[.])+[a-zA-Z]{2,3}$/;

                    if (!p.test(v)) {
                        $(".emailP").show();
                        $("#email").css("border-color", "red");
                        //return false;
                    } else {
                        $(".emailP").hide();
                        $("#email").css("border-color", "blue");
                        //return true;
                    }
                });
            }
        }
    };
    return {
        init: function init() {
            verification.init();
        }
    };
}, { requires: ["jquery"] });