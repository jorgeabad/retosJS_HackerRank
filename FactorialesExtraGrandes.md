# Factoriales muy grandes

El factorial del número entero  $n$ , escrito  $n!$ , Se define como:

$n!=n\times(n - 1)\times ( n - 2)\times. . .\times3\times2\times1$

## Desafio.
Calcular e imprimir el factorial de un entero dado. 
Por ejemplo, si  $n=30$, calculamos 30 x 29 x 28 x. . . x 2 x 1 y obtenemos 26525285981219105636308480000000.

Se ha de Completar la función `extraLongFactorials`.

`extraLongFactorials` tiene los siguientes parámetros:
* `n`: un número entero

**Formato de entrada** del programa en la terminal.

La entrada consta de un solo entero `n`

**Restricciones**
-   $1 <= n <= 100$

**Formato de salida**.

Imprime el factorial de  *n* .

**Entrada de muestra**

```
25
```

**Salida de muestra**

```
15511210043330985984000000
```

**Explicación**

25! = 25x24x23x. . . x 3 x 2 x 1

## Problemática de los números grandes en JavaScript. BigInt

En JavaScript, el tipo de dato `Number` se utiliza para representar valores numéricos, todos los números se almacenan en un formato de punto flotante de 64 bits (estándar IEEE 754). Con este estándar, los enteros grandes no se pueden representar exactamente y se redondearán. Debido a esto, JavaScript solo puede representar números enteros de manera segura en el rango:

* Entre **9007199254740991** +$(2^{53} -1)$ y **-9007199254740991**  -$(2^{53} -1)$.


Los valores enteros fuera del anterior rango pierden precisión.

JavaScript tiene constantes llamadas `Number.MAX_SAFE_INTEGER` y `Number.MIN_SAFE_INTEGER`, que representan los valores máximos y mínimos seguros que se pueden representar de manera precisa con el tipo `Number`. Estos valores son, respectivamente:

```javascript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
```

Si intentamos realizar operaciones con números más grandes que `Number.MAX_SAFE_INTEGER`, podemos obtener resultados incorrectos debido a la falta de precisión. Veamos un ejemplo:

```javascript
console.log(9007199254740992); // 9007199254740992
console.log(9007199254740992 + 1); // 9007199254740992
console.log(9007199254740992 + 2); // 9007199254740994
```

Como puedes ver, el resultado de `9007199254740992 + 1` no es el esperado, ya que el valor obtenido es el mismo que el número original. Esto se debe a que `Number` no puede representar con precisión números tan grandes.

### ¿Qué es BigInt?

El tipo `BigInt` fue introducido en ECMAScript 2020 para permitir el manejo de enteros arbitrariamente grandes. A diferencia del tipo `Number`, que se basa en el estándar IEEE 754 de punto flotante de 64 bits, `BigInt` utiliza una representación interna que no tiene límites en cuanto al tamaño de los números.

En el ejemplo anterior para utilizar `BigInt`, simplemente agregamos la letra "n" al final del número:

```javascript
const numeroGrande = 9007199254740992n;
console.log(numeroGrande + 1n); // 9007199254740993n
console.log(numeroGrande + 2n); // 9007199254740994n
```
Ahora, los cálculos se realizan con precisión utilizando `BigInt`, y obtenemos los resultados correctos.

#### Constructor de `BigInt`

Para crear un valor `BigInt`, se puede utilizar el constructor `BigInt()` o añadir la letra `n` al final de un número entero.

```javascript
const bigIntValue1 = BigInt(1234567890);
const bigIntValue2 = 9876543210n;

console.log(bigIntValue1); // 1234567890n
console.log(bigIntValue2); // 9876543210n
```

#### Operaciones con `BigInt`
Las operaciones aritméticas básicas, como suma, resta, multiplicación y división, se pueden realizar con `BigInt` de manera similar a los números normales.

```javascript
const a = 1234567890n;
const b = 9876543210n;

const sum = a + b;
const difference = a - b;
const product = a * b;
const quotient = a / b;

console.log(sum); // 11111111100n
console.log(difference); // -8641975320n
console.log(product); // 12193263111263526900n
console.log(quotient); // 0n
```

Es importante tener en cuenta que la división de `BigInt` siempre produce un resultado redondeado hacia cero, ya que solo maneja números enteros.

#### Errores típicos con `BigInt`
Al trabajar con `BigInt`, es posible cometer algunos errores comunes:

1. **Mezclar `BigInt` con `Number`:** Debido a que `BigInt` es un tipo distinto, no se pueden mezclar directamente con `Number` en operaciones aritméticas. Es necesario convertir explícitamente entre ellos utilizando métodos como `BigInt()` o `Number()`.

```javascript
const a = 1234567890n;
const b = 123;

const sum = a + BigInt(b);
console.log(sum); // 1234568013n
```

2. **Olvidar añadir la letra `n`:** Es importante recordar que los literales `BigInt` deben terminar con la letra `n` para distinguirlos de los números normales. Si se olvida añadir la letra `n`, se creará un valor `Number` en su lugar.

```javascript
const bigIntValue = 1234567890; // Esto es un Number, no un BigInt
console.log(bigIntValue); // 1234567890
```

3. **Cometer errores de precisión en operaciones mixtas:** Al realizar operaciones entre `BigInt` y `Number`, puede haber pérdida de precisión si el resultado supera el rango seguro de `Number`. Es importante convertir adecuadamente los valores a `BigInt` cuando se realizan cálculos que involucran `BigInt`.

```javascript
const a = 9007199254740991n; // Valor máximo seguro de BigInt
const b = Number.MAX_SAFE_INTEGER;

const sum = a + BigInt(b);
console.log(sum); // 18014398509481982n (Valor correcto)

const incorrectSum = a + b;//Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## SOLUCIÓN.

El fragmento de código JavaScript que se muestra a continuación implementa una función para calcular factoriales utilizando la técnica de memoización:

```javascript
const factorial = (function() {
  let cache = {};

  function memoizedFactorial(n) {
    // Verificar si el resultado ya está en la caché
    if (n in cache) {
      return cache[n];
    }

    // Calcular el factorial recursivamente
    const result = n === 0 ? BigInt(1) : BigInt(n) * memoizedFactorial(n - 1);
    
    // Almacenar el resultado en la caché
    cache[n] = result;

    return result;
  }

  return memoizedFactorial;
})();

function extraLongFactorials(n) {
    console.log(`${String(factorial(n))}`);
  }
```

**¿Qué es la memoización?**

La memoización es una técnica utilizada en programación para almacenar y reutilizar los resultados de cálculos costosos. En lugar de calcular el resultado cada vez que se necesita, la memoización permite almacenar el resultado en una caché y recuperarlo cuando se requiera nuevamente. Esto mejora la eficiencia al evitar cálculos repetidos.

La función `factorial` utiliza la técnica de memoización para calcular factoriales de manera eficiente. La variable `cache` es un objeto que se utiliza como una estructura de datos para almacenar los resultados previamente calculados. Se inicializa como un objeto vacío.

La función interna `memoizedFactorial` es la encargada de realizar el cálculo del factorial. Toma un parámetro `n` que representa el número para calcular su factorial. Dentro de esta función, se verifica si el resultado para el número `n` ya está presente en la caché. Si es así, se retorna directamente el valor almacenado en la caché.

En caso de que el resultado no esté en la caché, se realiza el cálculo recursivo del factorial. Si `n` es igual a cero, se retorna `BigInt(1)` ya que el factorial de cero es uno. De lo contrario, se multiplica `BigInt(n)` por el factorial de `n - 1` para obtener el resultado del factorial.

Una vez calculado el resultado, se almacena en la caché asociado al número `n`. Esto garantiza que los cálculos futuros para el mismo número se realicen de forma más eficiente al recuperar el resultado de la caché en lugar de realizar nuevamente los cálculos.

Finalmente, la función `factorial` se retorna como el resultado de la invocación de una función autoejecutable `(function() { ... })()`. Esto permite encapsular la variable `cache` y la función `memoizedFactorial` dentro de un contexto privado, evitando que sean accesibles desde el exterior.

La función `extraLongFactorials` es una función adicional que toma un parámetro `n` y muestra por consola el resultado del cálculo del factorial utilizando la función `factorial` implementada anteriormente. Convierte el resultado en una cadena de texto mediante `String()` para asegurarse de que se muestre correctamente en la consola.

En resumen, este código implementa una función para calcular factoriales utilizando la técnica de memoización y el tipo de dato `BigInt` para trabajar con números enteros grandes. La memoización permite almacenar y reutilizar los resultados previamente calculados, mejorando así la eficiencia del cálculo. El uso de `BigInt` permite manejar números enteros arbitrariamente grandes sin preocuparse por los límites numéricos estándar de JavaScript.

### Ejemplo de uso.

```javascript
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
```
Al ejecutar este código, se calcula el factorial de `20` tres veces y el factorial de `25` una vez. Sin embargo, debido al uso de la técnica de memoización, se puede observar que el cálculo del factorial de `20` solo se realiza una vez. Las siguientes veces que se solicita el factorial de `20`, se recupera directamente desde la caché, como se indica en los mensajes de consola:

```
Calculando el factorial de 20
2432902008176640000
Recuperando el factorial de 20 desde la caché
2432902008176640000
Calculando el factorial de 25
15511210043330985984000000
```

Esto demuestra la ventaja de utilizar la técnica de memoización. Los cálculos costosos solo se realizan una vez y los resultados se almacenan en la caché para su reutilización posterior. Como resultado, se mejora el rendimiento y se evitan cálculos innecesarios.

**Uso del tipo de dato BigInt para números enteros grandes**

En el código anterior, se utiliza el tipo de dato `BigInt` para manejar números enteros grandes en el cálculo de factoriales. Esto es necesario porque JavaScript tiene un límite en el tamaño de los enteros que puede representar de forma precisa.

Al utilizar `BigInt`, se pueden calcular factoriales para números enteros mucho más grandes sin perder precisión. En el ejemplo de uso, se calcula el factorial de `25` y se muestra correctamente en la consola:

```
Calculando el factorial de 25
15511210043330985984000000
```

Si se intentara realizar el cálculo sin utilizar `BigInt`, se obtendría un resultado incorrecto debido a los límites numéricos estándar de JavaScript.

En resumen, la combinación de memoización y el uso del tipo de dato `BigInt` en el cálculo de factoriales largos permite mejorar el rendimiento y calcular resultados precisos para números enteros grandes. La memoización evita cálculos repetidos almacenando resultados previamente calculados, mientras que `BigInt` proporciona la capacidad de trabajar con números enteros de gran magnitud.