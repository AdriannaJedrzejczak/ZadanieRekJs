export function generateLogicString(length) {
    let generatedText = "";

    generatedText += generateLargeChar();
    for (let i = 1; i < length; i++) {
        generatedText += generateSmallChar();
    }

    return generatedText;
}

function generateSmallChar() {
    const possible = "abcdefghijklmnopqrstuvwxyz";

    return possible.charAt(Math.floor(Math.random() * possible.length))
}

function generateLargeChar() {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return possible.charAt(Math.floor(Math.random() * possible.length))
}