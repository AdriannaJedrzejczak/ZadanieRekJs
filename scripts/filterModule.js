import {Date} from "./classes/Date.js";

export function checkResult(element, value) {
    let x = element.name + element.surname + Date.toFormattedString.call(element.birthDate) + element.pesel;
    if( x.toLowerCase().includes(value.toLowerCase()) ) return true;
    return false;
}