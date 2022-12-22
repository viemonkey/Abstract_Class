export class Circle {
    private _radius: number;


    constructor(radius: number) {
        this._radius = radius;
    }

    getradius(): number {
        return this._radius;
    }

    setradius(value: number) {
        this._radius = value;
    }
    toString(): string {
        return "A circle with radius = " + this.getradius()
    }
}
