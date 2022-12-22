import {Shape} from "./Shape";
import {Resizeable} from "../Interface/IResizeable";

export class Rectangle extends Shape implements Resizeable{
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }

    resize(percent: number) {
        (this.width + this.height) * percent;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }

    howToColor(color: string) {
        return "Color all four sides is " + color
    }
}