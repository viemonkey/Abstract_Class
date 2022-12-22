import {Tiger} from "./tiger";
import {Chicken} from "./chicken";
import {Apple} from "./apple";
import {Orange} from "./orange";

let animals = []

animals[0] = new Tiger()
animals[1] = new Chicken()

animals.forEach((item, index) => {
    console.log(item.makeSound())
    if (item instanceof Chicken) {
        console.log(item.howToEat())
    }
})
console.log('---Fruits-----')
let fruits = []

fruits[0] = new Apple();
fruits[1] = new Orange();
fruits.forEach(item => {
    console.log(item.howToEat())
})