"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this._radius = radius;
    }
    Circle.prototype.getradius = function () {
        return this._radius;
    };
    Circle.prototype.setradius = function (value) {
        this._radius = value;
    };
    Circle.prototype.toString = function () {
        return "A circle with radius = " + this.getradius();
    };
    return Circle;
}());
exports.Circle = Circle;
