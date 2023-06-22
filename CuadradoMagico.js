'use strict';

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

function formingMagicSquare(s) {
  const matricesInternas = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
  ];

  let costoTotal = Infinity; // Inicializamos el costo total con Infinity

  // Compara la matriz recibida con cada matriz interna
  matricesInternas.forEach(matrizInterna => {
    const diferencia = calcularDiferencias(s, matrizInterna, costoTotal);

    if (diferencia === 0) {
      // Si la diferencia es cero, encontramos una matriz igual, por lo que el costo total es cero
      costoTotal = 0;
      return;
    }

    // Actualiza el costo total si la diferencia es menor al costo total actual
    if (diferencia < costoTotal) {
      costoTotal = diferencia;
    }
  });

  // Devuelve el costo total
  return costoTotal;
}

// Calcula la suma de las diferencias entre dos matrices
function calcularDiferencias(matriz1, matriz2, costoTotal) {
  return matriz1
    .flatMap((fila, i) => fila.map((num, j) => Math.abs(num - matriz2[i][j]))) // Calcula las diferencias entre los elementos de las matrices
    .reduce((sumaDiferencias, diferencia) => {
      sumaDiferencias += diferencia;

      // Si la suma de diferencias supera el costo total, no es necesario seguir calculando
      if (sumaDiferencias > costoTotal) {
        return Infinity; // Devolvemos Infinity para indicar que el costo es mayor
      }

      return sumaDiferencias;
    }, 0);
}



function main() {
    

    let s = Array(3);

    for (let i = 0; i < 3; i++) {
        s[i] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));
    }

    const result = formingMagicSquare(s);

    process.stdout.write(result + '\n');

}