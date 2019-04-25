"use strict";

Zr.add("./merchantUser", function (zr, $) {
    var merchantUser = {
        init: function init() {
            merchantUser.eventsFn.timeF();
        },
        options: {},
        events: {},
        eventsFn: {
            timeF: function timeF() {
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
            }
        },
        ajax: {}
    };
    return {
        init: merchantUser.init
    };
}, { requires: ["jquery"] });