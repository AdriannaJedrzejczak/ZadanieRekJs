export function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function readFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function getRequestedNumber() {
    let indexOfPage = document.URL.indexOf("page=");
    let urlLength = document.URL.length;
    return document.URL.substr(indexOfPage>0 ? indexOfPage + 5: urlLength, urlLength);
}