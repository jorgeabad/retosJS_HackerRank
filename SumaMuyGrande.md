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