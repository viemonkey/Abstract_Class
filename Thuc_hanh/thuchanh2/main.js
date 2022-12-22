"use strict";
exports.__esModule = true;
var comparableCircle_1 = require("./comparableCircle");
var circle = [];
circle[0] = new comparableCircle_1.ComparableCircle(10);
circle[1] = new comparableCircle_1.ComparableCircle(20);
circle[2] = new comparableCircle_1.ComparableCircle(30);
var result = circle[1].compareTo(circle[2]);
if (result == 1) {
    console.log("The current circle is larger.");
}
else {
    console.log("The current circle is smaller.");
}
