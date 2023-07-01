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
 * Complete the 'organizingContainers' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts 2D_INTEGER_ARRAY container as parameter.
 */

function organizingContainers(matriz) {
 
  // Calcular sumatorios por fila utilizando map y reduce
  const contenedores = matriz.map(fila => fila.reduce((suma, elemento) => suma + elemento, 0));

  // Calcular sumatorios por columna utilizando reduce y map
  const tipos = matriz.reduce((columnas, fila) =>
    fila.map((elemento, indice) => (columnas[indice] || 0) + elemento), []);

  // Ordenar los arrays de menor a mayor
  contenedores.sort((a, b) => a - b);
  tipos.sort((a, b) => a - b);

  // Verificar si los arrays son iguales
   return JSON.stringify(contenedores) === JSON.stringify(tipos)?'Possible':'Impossible';
}

function main() {
   

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        let container = Array(n);

        for (let i = 0; i < n; i++) {
            container[i] = readLine().replace(/\s+$/g, '').split(' ').map(containerTemp => parseInt(containerTemp, 10));
        }

        const result = organizingContainers(container);

        process.stdout.write(result + '\n');
    }

}
