'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    // Write your code here
    const sumador = arr => arr.reduce((sum, act) => sum + act);
    
    let suma=sumador(ar);
    
    return suma;

}

function main() {
    
    const arCount = parseInt(readLine().trim(), 10);
    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));
    if (arCount !== ar.length) {
        console.log("El número de elementos no coincide con la longitud de la matriz");
        return;
    }
    const result = aVeryBigSum(ar);
    process.stdout.write(result + '\n');
    
}
