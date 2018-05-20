import {Date} from "./classes/Date.js";
import {getRequestedNumber, readFromLocalStorage} from "../libs/sessionModule.js";
import {displayPaginationMenu} from "./paginationModule.js";

export function displayData(actualData) {
    for(let i = 0; i < actualData.length; i++) {
        let newTableRow = document.createElement("tr");
        newTableRow.appendChild(generateRowElement(actualData[i].name));
        newTableRow.appendChild(generateRowElement(actualData[i].surname));
        newTableRow.appendChild(generateRowElement(Date.toFormattedString.call(actualData[i].birthDate)));
        newTableRow.appendChild(generateRowElement(actualData[i].pesel));

        let personsList = document.getElementById("PersonTable");
        let parenElement = personsList.getElementsByTagName("tbody")[0];
        parenElement.appendChild(newTableRow);
    }
    displayPaginationMenu(getRequestedNumber(), readFromLocalStorage("maxPage"));
}

function generateRowElement(value) {
    let element = document.createElement("td");
    element.innerText = value;
    return element;
}

export function refreshTableContent(actualData) {
    let personsList = document.getElementById("PersonTable");
    let parenElement = personsList.getElementsByTagName("tbody")[0];
    while(parenElement.firstChild) {
        parenElement.removeChild(parenElement.firstChild);
    }
    displayData(actualData);
}