import {Circle} from "./Circle";

export class Cylinder extends Circle {
    height: number;

    constructor(name: string,
                radius: number,
                height: number) {
        super(name, radius);
        this.height = height;
    }

    calculateArea(): number {
        return super.calculateArea() * 2 + super.calculatePerimeter() * this.height;
    }

    calculateVolume(): number {
        return super.calculateArea() * this.height;
    }

    resize(percent: number){
        return  this.radius = this.radius * percent;
    }
    resizeHeight(percent:number){
        return this.height = this.height * percent
    }

}