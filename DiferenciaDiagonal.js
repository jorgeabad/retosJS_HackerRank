'use strict';

const fs = require('fs');

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 * 
 */

function diagonalDifference(arr) {
    // Obtener la diagonal principal
    const dig1 = arr.map((a, i) => a[i]);

    // Obtener la diagonal secundaria invirtiendo el orden de las filas
    const dig2 = [...arr].reverse().map((a, i) => a[i]);

    // Función auxiliar para sumar los elementos de un array
    const sumadorDiagonal = arr => arr.reduce((sum, act) => sum + act);

    // Calcular la suma de las diagonales
    let sumdig1 = sumadorDiagonal(dig1);
    let sumdig2 = sumadorDiagonal(dig2);

    // Calcular la diferencia absoluta entre las sumas de las diagonales
    let resul = Math.abs(sumdig1 - sumdig2);

    // Devolver el resultado
    return resul;
}


function main() {
    const ws = fs.createWriteStream('prueba.txt');

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');
    process.stdout.write("\n"+result.toString()+"\n");
    ws.end();
}
