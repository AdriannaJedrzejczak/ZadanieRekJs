import {generateNumber} from "../../libs/NumberGenerator.js";

export class Date {
    constructor() {
        this.day = generateNumber(1, 30);
        this.month = generateNumber(1, 12);
        this.year = generateNumber(1930, 2000);
    }

    static toFormattedString() {
        let text = '';
        for(let property in this) {
            if(this.hasOwnProperty(property)) {
                text += this[property] + "/";
            }
        }
        return text;
    }

}

