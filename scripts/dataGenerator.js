import {Person} from "./classes/Person.js";
import {Date} from "./classes/Date.js";
import {generateNumber} from "../libs/NumberGenerator.js";
import {generateLogicString} from "../libs/LogicStringGenerator.js";
import {generatePesel} from "../libs/PeselGenerator.js";

export function generateData(howMuch) {
    let arrayOfPersons = [];

    for(let i = 0; i< howMuch; i++) {
        let person = new Person();
        person.name = generateLogicString(generateNumber(3, 15));
        person.surname = generateLogicString(generateNumber(3, 15));
        person.birthDate = new Date();
        person.pesel = generateUniquePesel(arrayOfPersons, person.birthDate);

        arrayOfPersons.push(person);
    }

    return arrayOfPersons;
}

function generateUniquePesel(array, birthDate) {
    let generatedPesel;
    do{
        generatedPesel = generatePesel(birthDate);
    } while(array.includes(el => el.pesel === generatedPesel) )
        return generatedPesel;
}

