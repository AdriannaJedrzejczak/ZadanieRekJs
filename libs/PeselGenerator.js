import {generateNumber} from "./NumberGenerator.js";

export function generatePesel(birthDate) {

    let pesel = insertBirthDateToPesel(birthDate);
    pesel += generateNumber(0, 9, 5).join("");

    return pesel;
}

function insertBirthDateToPesel(birthDate) {
    let pesel = "";
    if(birthDate.day.toString().length>1) {
        pesel += birthDate.day;
    } else {
        pesel += '0' + birthDate.day;
    }
    if(birthDate.month.toString().length>1) {
        pesel += birthDate.month;
    } else {
        pesel += '0' + birthDate.month;
    }
    pesel += birthDate.year;

    return pesel;
}