'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    arr.reduce((_, num) => {
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }, 0);

    const length = arr.length;

    const positiveRatio = (positiveCount / length).toFixed(6);
    const negativeRatio = (negativeCount / length).toFixed(6);
    const zeroRatio = (zeroCount / length).toFixed(6);

    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);

}

function main() {

    const arCount = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));
    if (arCount !== arr.length) {
        console.log("El número de elementos no coincide con la longitud de la matriz");
        return;
    }
    console.log('\nProporciones:')
    plusMinus(arr);
}
