import {generateData} from './dataGenerator.js';
import {saveToLocalStorage, readFromLocalStorage, getRequestedNumber} from "../libs/sessionModule.js";
import {sortByParameter, sortByDate} from "./sortModule.js";
import {checkResult} from './filterModule.js';
import {refreshTableContent} from './tableModule.js';

var amountOfDataToGenerate = 200;

if(!getRequestedNumber()) {
    window.location.href='/?page=1';
}

var data;
var actualData;
var actualPage = getRequestedNumber();
var maxPage = readFromLocalStorage("maxPage");
var sortBy = "nameHeader";
var dir = true;
var nameHeader= document.getElementById("nameHeader");
nameHeader.addEventListener("click", changeSort);
var surnameHeader = document.getElementById("surnameHeader");
surnameHeader.addEventListener("click", changeSort);
var birthDateHeader = document.getElementById("birthDateHeader");
birthDateHeader.addEventListener("click", changeSort);
var peselHeader = document.getElementById("peselHeader");
peselHeader.addEventListener("click", changeSort);

var input = document.getElementById("filterInput");
input.addEventListener("input", filter);

var btnNext = document.getElementById("btnNext");
btnNext.addEventListener("click", onButtonClicked);
startFunction();

function startFunction() {
    if(!readFromLocalStorage(getRequestedNumber())) {
        data = generateData(amountOfDataToGenerate);
        saveToLocalStorage(actualPage, data);
        console.log(data);

    } else {
        data = readFromLocalStorage(getRequestedNumber());
    }
    if(readFromLocalStorage("maxPage")==null) {
        maxPage = actualPage;
    }
    actualData = data;
    sortTable();
}

function onButtonClicked() {
    maxPage ++;
    saveToLocalStorage("maxPage", maxPage);

    let newData = generateData(amountOfDataToGenerate);
    saveToLocalStorage(maxPage, newData);
    refreshTableContent(actualData);
}

function changeSort(value) {
    if(sortBy === value.toElement.id) {
        dir = !dir;
    } else {
        sortBy = value.toElement.id;
        dir = true;
    }
    sortTable();
}

function filter() {
    let inputValue = document.getElementById("filterInput").value;
    actualData = data.filter(el => checkResult(el, inputValue));
    refreshTableContent(actualData)
}

function sortTable() {
    switch (sortBy) {
        case "nameHeader": {
            actualData = sortByParameter(actualData, "name", dir);
            break;
        }
        case "surnameHeader": {
            actualData = sortByParameter(actualData, "surname", dir);
            break;
        }
        case "birthDateHeader": {
            actualData = sortByDate(actualData, dir);
            break;
        }
        case "peselHeader": {
            actualData = sortByParameter(actualData, "pesel", dir);
            break;
        }
    }
    refreshTableContent(actualData)
}