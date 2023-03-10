"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ComparableCircle = void 0;
var circle_1 = require("./circle");
// @ts-ignore
var ComparableCircle = /** @class */ (function (_super) {
    __extends(ComparableCircle, _super);
    function ComparableCircle(radius) {
        return _super.call(this, radius) || this;
    }
    // @ts-ignore
    ComparableCircle.prototype.comparaTo = function (o) {
        if (this.getradius() > o.getradius()) {
            return 1;
        }
        else if (this.getradius() < o.getradius()) {
            return -1;
        }
        else {
            return 1;
        }
    };
    return ComparableCircle;
}(circle_1.Circle));
exports.ComparableCircle = ComparableCircle;
