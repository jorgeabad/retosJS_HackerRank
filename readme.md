# Diferencia diagonal

Dada una matriz cuadrada, calcular la diferencia absoluta entre las sumas de sus diagonales.

Por ejemplo, la matriz cuadrada `arr` que se muestra a continuación:

```
5 7 8
9 3 2      
1 1 1
```

La diagonal de izquierda a derecha 5 + 3 + 1 = 9. La diagonal de derecha a izquierda 8 + 3+ 1=12. Su diferencia absoluta es 9-12=3

Completar la función `diagonalDifference` toma el siguiente parámetro:

-   int `arr[n][m]` : una matriz de enteros

Devuelve:

-   int : la diferencia diagonal absoluta

Formato de entrada del programa en la terminal:

La primera línea contiene un solo entero, n, el número de filas y columnas en la matriz cuadrada `arr`
cada una de los siguientes líneas describe una fila, arr[i], y consta de n enteros separados por espacios `arr[i][j]`.

Entrada de muestra

```
4
1 2 3 4
7 7 8 9
2 3 1 1
5 6 4 22
```
Salida de muestra

```
11
```
Explicación:

`4 //Matriz cuadrada 4x4`


La diagonal principal es:

```
1
  7
    1
      22
```

Suma de la diagonal principal: 31

La diagonal secundaria es:

```
      4
    8 
  3 
5 
```

Suma de la diagonal secundaria: 20
Diferencia: |31 - 20| = 11

Nota: |x| es el valor absoluto de x

Solución:

```js
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

```
La función diagonalDifference calcula la diferencia absoluta entre la suma de los elementos en la diagonal principal y la suma de los elementos en la diagonal secundaria de una matriz.

1. La variable dig1 se crea utilizando el método map para obtener los elementos de la diagonal principal. La función de mapeo a[i] obtiene el elemento i de cada fila a. Esto asume que la matriz de entrada es cuadrada.

2. La variable dig2 se crea invirtiendo el orden de las filas de la matriz original y luego aplicando el mismo proceso que en dig1 para obtener los elementos de la diagonal secundaria.

3. La función sumadorDiagonal es una función auxiliar que toma un arreglo y devuelve la suma de sus elementos. Utiliza el método reduce para iterar sobre el arreglo y acumular la suma.

4. Las variables sumdig1 y sumdig2 almacenan las sumas de los elementos en las diagonales principales y secundarias respectivamente.

5. La variable resul calcula la diferencia absoluta entre las sumas de las diagonales utilizando Math.abs.

6. Finalmente, se devuelve el resultado.


# Suma muy grande

Calcular e imprimir la suma de los elementos en un array de n números enteros, teniendo en cuenta que algunos de esos números enteros pueden ser bastante grande.

Función descriptiva

Completar la función `aVeryBigSum` que devuelve la suma de todos los elementos de la matriz.

`aVeryBigSum` tiene los siguientes parámetros:

-   int ar[n] : una matriz de enteros.

Devuelve:
-   long : la suma de todos los elementos de la matriz

Formato de entrada y salida del programa en la terminal:

La primera línea de la entrada consiste en un número entero n
La siguiente línea contieneenteros separados por espacios contenidos en la matriz, se devuelve la suma entera de los elementos de la matriz.

Restricciones

Entrada de muestra

```
5
1000000001 1000000002 1000000003 1000000004 1000000005
```

Salida

```
5000000015
```
Solución javascript

```js
function aVeryBigSum(ar) {
    // Función que calcula la suma de todos los elementos en la matriz

    // Definición de la función sumador que realiza la suma de los elementos de un arreglo
    const sumador = arr => arr.reduce((sum, act) => sum + act);

    // Llamada a la función sumador para obtener la suma de los elementos en la matriz ar
    let suma = sumador(ar);

    // Devuelve la suma calculada
    return suma;
}
```
La función `aVeryBigSum` recibe un array `ar` como parámetro y calcula la suma de todos los elementos en ese array. Utiliza una función auxiliar llamada `sumador` que utiliza el método `reduce` para sumar todos los elementos de un arreglo.

Luego, se llama a la función `sumador` pasándole el array `ar `como argumento y se almacena el resultado en la variable `suma`. Finalmente, se devuelve el valor de `suma`, que representa la suma de los elementos en la matriz.