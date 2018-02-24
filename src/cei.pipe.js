"use strict";
var utils_1 = require('./utils');
var core_1 = require('@angular/core');
// 76.119.87629/85
var CeiPipe = (function () {
    function CeiPipe() {
    }
    CeiPipe.prototype.transform = function (value) {
        if (!utils_1.isString(value)) {
            return value;
        }
        if (value && value.length === 12) {
            return value.substr(0, 2) + "." + value.substr(2, 3) + "." + value.substr(5, 5) + "/" + value.substr(10, 2);
        }
        return value;
    };
    CeiPipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'cei'
                },] },
    ];
    /** @nocollapse */
    CeiPipe.ctorParameters = [];
    return CeiPipe;
}());
exports.CeiPipe = CeiPipe;
//# sourceMappingURL=cei.pipe.js.map