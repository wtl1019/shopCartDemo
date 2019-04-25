"use strict";

Zr.add("./warehouseServices", function (zr, $, tag) {
    var warehouseServices = {
        init: function init() {
            warehouseServices.events.init();
        },
        options: {},
        events: {
            init: function init() {
                tag.init();
            }
        },
        eventsFn: {},
        ajax: {}
    };
    return {
        init: warehouseServices.init

    };
}, { requires: ["jquery", "tag"] });