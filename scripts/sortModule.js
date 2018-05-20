export function sortByParameter(arrayToSort, parameter, dir) {
    let result = arrayToSort.sort((a, b) => a[parameter] > b[parameter] ? 1 : -1);
    if(dir) return result;
    return result.reverse();
}

export function sortByDate(arrayToSort, dir) {
    let result = arrayToSort.sort((a, b) => a.birthDate.year > b.birthDate.year ? 1 : -1);
    if(dir) return result;
    return result.reverse();
}

