"use strict";
var core_1 = require('@angular/core');
// R$ 1.000,00
var RealPipe = (function () {
    function RealPipe() {
    }
    RealPipe.prototype.transform = function (value, decimalDelimiter, decimalLength, chunkDelimiter, chunkLength) {
        if (decimalDelimiter === void 0) { decimalDelimiter = ','; }
        if (decimalLength === void 0) { decimalLength = 2; }
        if (chunkDelimiter === void 0) { chunkDelimiter = '.'; }
        if (chunkLength === void 0) { chunkLength = 3; }
        if (value === null || value === undefined || value === '') {
            return '';
        }
        if (isNaN(value)) {
            return value;
        }
        var result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')';
        var num = value.toFixed(Math.max(0, ~~decimalLength));
        return 'R$' + (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);
    };
    RealPipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'real'
                },] },
    ];
    /** @nocollapse */
    RealPipe.ctorParameters = [];
    return RealPipe;
}());
exports.RealPipe = RealPipe;
//# sourceMappingURL=real.pipe.js.map