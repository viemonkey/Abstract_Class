import {Rectangle} from "./Rectangle";

export class Square extends Rectangle {
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }
    resize(percent: number) {
        this.width * percent
    }
    howToColor(color: string) {
        return "Color all four sides is" + color
    }
}