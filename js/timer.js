"use strict";

Zr.add("./timer", function (zr) {
    var timer = {
        init: function init() {
            timer.events.timeCount();
        },
        events: {
            timeCount: function timeCount() {
                window.onload = function () {
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
                };
            }
        }
    };
    return {
        init: function init() {
            timer.init();
        }
    };
}, { requires: [] });