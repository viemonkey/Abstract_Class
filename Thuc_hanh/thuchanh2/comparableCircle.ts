import {Circle} from "./circle";
import {Comparable} from "./comparable";

// @ts-ignore
export class ComparableCircle extends Circle implements Comparable {
    constructor(radius: number) {
        super(radius);
    }


    // @ts-ignore
    comparaTo(o: ComparableCircle): number {
        if (this.getradius() > o.getradius()) {
            return 1;
        } else if (this.getradius() < o.getradius()) {
            return -1;
        } else {
            return 1;
        }


    }
}