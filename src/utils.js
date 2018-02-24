"use strict";
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
function hasLength(value) {
    return value.toString().trim().length > 0;
}
exports.hasLength = hasLength;
//# sourceMappingURL=utils.js.map