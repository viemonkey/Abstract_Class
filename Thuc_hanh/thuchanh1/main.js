"use strict";
exports.__esModule = true;
var tiger_1 = require("./tiger");
var chicken_1 = require("./chicken");
var apple_1 = require("./apple");
var orange_1 = require("./orange");
var animals = [];
animals[0] = new tiger_1.Tiger();
animals[1] = new chicken_1.Chicken();
animals.forEach(function (item, index) {
    console.log(item.makeSound());
    if (item instanceof chicken_1.Chicken) {
        console.log(item.howToEat());
    }
});
console.log('---Fruits-----');
var fruits = [];
fruits[0] = new apple_1.Apple();
fruits[1] = new orange_1.Orange();
fruits.forEach(function (item) {
    console.log(item.howToEat());
});
