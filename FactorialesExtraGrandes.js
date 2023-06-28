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

/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

const factorial = (function() {
    let cache = {};
  
    function memoizedFactorial(n) {
      // Verificar si el resultado ya esta en la cache
      if (n in cache) {
        return cache[n];
      }
  
      // Calcular el factorial recursivamente
      const result = n === 0 ? BigInt(1) : BigInt(n) * memoizedFactorial(n - 1);
      
      // Almacenar el resultado en la cache
      cache[n] = result;
  
      return result;
    }
  
    return memoizedFactorial;
  })();
  
  function extraLongFactorials(n) {
      console.log(`${String(factorial(n))}`);
    }

function main() {
    const n = parseInt(readLine().trim(), 10);

    extraLongFactorials(n);
}
