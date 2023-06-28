const factorial = (function() {
    let cache = {};
  
    function memoizedFactorial(n) {
      if (n in cache) {
        console.log(`Recuperando el factorial de ${n} desde la caché`);
        return cache[n];
      }
  
      const result = n === 0 ? BigInt(1) : BigInt(n) * memoizedFactorial(n - 1);
      cache[n] = result;
  
      console.log(`Calculando el factorial de ${n}`);
      return result;
    }
  
    return memoizedFactorial;
  })();
  
  function extraLongFactorials(n) {
    console.log(`${String(factorial(n))}`);
  }
  
  // Ejemplo de uso
  extraLongFactorials(20);
  extraLongFactorials(20);
  extraLongFactorials(25);
  
  
  