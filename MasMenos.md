# MAS MENOS

Dado un array de números enteros, calcular las proporciones de sus elementos que son positivos, negativos y cero. Se ha de imprimir el valor de cada proporción en una nueva línea y con 6 posiciones decimales.

### **Ejemplo:**

```
arr = [2, 2, 0, -2, -2]
```
Hay n=5 elementos, dos positivos, dos negativos y uno cero. sus proporciones son: 

$$
\frac{2}{5}=0.400000,\frac{2}{5}=0.400000,\frac{1}{5}=0.200000
$$

Los resultados se imprimen como:

```
0.400000
0.400000
0.200000
```

### **Función descriptiva:**

**Completar la función `plusMinus`**:

`plusMinus` tiene los siguientes parámetros:

-   int arr[n] : una array de enteros

La función no debe devolver un valor. Imprime las proporciones con 6 decimales, de valores positivos, negativos y cero en la matriz. Cada valor debe imprimirse en una línea

### **Formato de entrada en la terminal:**

La primera línea contiene un número entero, `n`, el tamaño del array.
La segunda línea contiene `n` enteros separados por espacios que describen `arr[n]`

**Entrada de muestra**

```
Input (stdin)
8
1 2 3 -1 -2 -3 0 0
```

**Salida de muestra**

```
0.375000
0.375000
0.250000
```

**Explicación**

Hay 3 números positivos, 3 números negativos y 2 ceros en el array.
Las proporciones de ocurrencia son positivas: $\frac{3}{8}=0$.375000, negativo: $\frac{3}{8}=0$ y ceros: $\frac{2}{8}=0.250000$

### **Solución:**

```js
function plusMinus(arr) {
  // Variables para contar la cantidad de elementos positivos, negativos y cero
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  // Utilizamos reduce para iterar sobre cada elemento del array y realizar los conteos
  arr.reduce((_, num) => {
    if (num > 0) {
      // Si el número es positivo, incrementamos positiveCount
      positiveCount++;
    } else if (num < 0) {
      // Si el número es negativo, incrementamos negativeCount
      negativeCount++;
    } else {
      // Si el número es cero, incrementamos zeroCount
      zeroCount++;
    }
  }, 0);

  // Calculamos la longitud del array
  const length = arr.length;

  // Calculamos las proporciones dividiendo los conteos entre la longitud y aplicando toFixed para redondear a 6 decimales
  const positiveRatio = (positiveCount / length).toFixed(6);
  const negativeRatio = (negativeCount / length).toFixed(6);
  const zeroRatio = (zeroCount / length).toFixed(6);

  // Imprimimos las proporciones de cada categoría
  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}

```
**Ejemplos E/S del programa final:**

```
4
1 2 3 0
Proporciones:
0.750000
0.000000
0.250000

10
1 2 3 4 5 6 7 8 0 -1
Proporciones:
0.800000
0.100000
0.100000
```