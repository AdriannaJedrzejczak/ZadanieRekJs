export function generateNumber(minValue, maxValue, amountOfValues) {
    if(amountOfValues) {
        let results = [];
        for( let i = 0; i<amountOfValues; i++ ) {
            results.push(generateRandomNumber(minValue, maxValue));
        }
        return results;
    } else {
        return generateRandomNumber(minValue, maxValue);
    }
}

function generateRandomNumber(minValue, maxValue) {
    return Math.floor( Math.random() * (maxValue - minValue) + minValue);
}

