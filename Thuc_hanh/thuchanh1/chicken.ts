import {Animal} from "./animal";

export class Chicken extends Animal {
    makeSound(): string {
        return "chicken: cluck cluck"
    }
    howToEat(): string {
        return "Could be fried"
    }
}