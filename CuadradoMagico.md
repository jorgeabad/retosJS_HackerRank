# Formar un cuadrado mágico.

Definimos un cuadrado mágico como una matriz $nxn$ de enteros positivos y distintos del 1 a $n^2$, donde la suma de cualquier fila, columna o diagonal de longitud n es siempre igual al mismo número: la constante mágica $K$

Se puede calcular $K = n(n^2 +1)/2$

Partiendo de una matriz $S$, de orden $3x3$ compuesta de enteros positivos en el rango  inclusivo $[1,9]$. Podemos convertir cualquier dígito $a$ a cualquier otro dígito $b$ en el rango inclusivo $[1,9]$ a un coste de $|a-b|$. Dado la matriz $S$ ha de convertirse en un cuadrado mágico a un coste mínimo, imprimiendo el costo en una nueva línea.

Sabemos que $k=3\times(3^2 +1)/2$; $k=15$

Nota: El cuadrado mágico resultante debe contener enteros distintos en el rango inclusivo $[1,9]$.

## Ejemplos:

S = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]

La matriz $S$ como ejemplo de entrada en la terminal se verá así:

```
5  3  4
1  5  8
6  4  2
```
Podemos convertirla al siguiente cuadrado mágico:

```
8  3  4
1  5  9
6  7  2
```
Esto tomó tres reemplazos a un costo de |5-8|+|8-9|+|4-7|=7

Se pide completar la función `FormingMagicSquare` que tiene los siguientes parámetrosde entrada:

-   int `S[3][3]`: una matriz de 3x3 enteros

Devolviendo:
-   int: el costo total mínimo de convertir el cuadrado de entrada en un cuadrado mágico.

Formato de entradas

Cada una de las 3 líneas contiene los tres enteros de la fila separados por espacios, S[i]

Restricciones:

$S[i][j]\in[1,9]$

Entrada de muestra 0

```
4 9 2
3 5 7
8 1 5
```
Salida de muestra 0

```
1
```
Explicación 0

Si cambiamos el valor inferior derecho, `S[2][2]`, de 5 a 6 al costo de `|5-6|=1`, `S` se convierte en un cuadrado mágico al mínimo coste posible.

Matriz mágica creada:
```
4 9 2
3 5 7
8 1 6
```

Entrada de muestra 1

```
4 8 2
4 5 7
6 1 6
```
Salida de muestra 1

```
4
```
Explicación 1

Nuestra matriz mágica quedará de la siguiente manera:
```
4 9 2
3 5 7
8 1 6
```
* `S[0][1]` pasamos de 8 a 9 al costo de $|8-9|=1$
* `S[1][0]` pasamos de 4 al 3 al costo de $|4-3|=1$
* `S[2][0]` pasamos de 6 a 8 al costo de $|6-8|=2$

Entonces el costo total sera $1+1+2=4$.




## Soluciónes:

Se parte de que hay 8 cuadrados mágicos posibles de 3*3 dimensiones, que son:
```
8 1 6 
3 5 7 
4 9 2

6 1 8 
7 5 3 
2 9 4

4 9 2 
3 5 7 
8 1 6

2 9 4 
7 5 3 
6 1 8

8 3 4 
1 5 9 
6 7 2

4 3 8 
9 5 1 
2 7 6

6 7 2 
1 5 9 
8 3 4

2 7 6 
9 5 1 
4 3 8

```
La función `formingMagicSquare` que vamos a implementar utiliza un enfoque de fuerza bruta para encontrar el costo mínimo de convertir la matriz dada en un cuadrado mágico. Dentro de nuestra función se itera sobre un array de matrices `matricesInternas` que contiene todas las posibles matrices que resultan en un cuadrado mágico, cada matriz interna es una posible solución válida, y calcula las diferencias con la matriz dada, actualizando el costo total si encuentra una mejor solución. Al final, devuelve el costo total mínimo encontrado.

### Implementación A

El proceso de la función es el siguiente:

1. Se inicializan dos variables: `encontrada` para indicar si se encuentra una matriz igual y `costoTotal` para almacenar el costo mínimo.

1. Se itera sobre cada matriz interna en `matricesInternas`.

2. Para cada matriz interna, se calcula la diferencia entre la matriz dada s y la matriz interna utilizando la función `calcularDiferencias`. Esta función suma las diferencias absolutas entre los elementos de ambas matrices.

3. Si la diferencia es cero, significa que se encontró una matriz igual a la matriz dada. En este caso, se establece `costoTotal` a cero y se rompe el bucle.

4. Si la diferencia no es cero, se compara con `costoTotal`. Si la diferencia es menor a `costoTotal`, se actualiza `costoTotal` con el nuevo valor.

5. Después de iterar sobre todas las matrices internas, se devuelve el valor de `costoTotal`, que será el costo mínimo para convertir la matriz dada en un cuadrado mágico.

La función `calcularDiferencias` se encarga de calcular la suma de las diferencias entre dos matrices. Recorre los elementos de ambas matrices y suma las diferencias absolutas. Sin embargo, se optimiza para detener el cálculo si la suma de diferencias supera el costo total actual, ya que no es necesario seguir calculando si se sabe que el costo será mayor.

```js
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
  
    let encontrada = false;
    let costoTotal = Infinity; // Inicializamos el costo total con Infinity
  
    // Compara la matriz recibida con cada matriz interna
    for (const matrizInterna of matricesInternas) {
      const diferencia = calcularDiferencias(s, matrizInterna, costoTotal);
  
      if (diferencia === 0) {
        // Si la diferencia es cero, encontramos una matriz igual, por lo que el costo total es cero
        costoTotal = 0;
        break;
      }
  
      // Actualiza el costo total si la diferencia es menor al costo total actual
      if (diferencia < costoTotal) {
        costoTotal = diferencia;
      }
    }
  
    // Devuelve el costo total
    return costoTotal;
  }
  
  // Calcula la suma de las diferencias entre dos matrices
  function calcularDiferencias(matriz1, matriz2, costoTotal) {
    let sumaDiferencias = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const diferencia = Math.abs(matriz1[i][j] - matriz2[i][j]);
        sumaDiferencias += diferencia;
  
        // Si la suma de diferencias supera el costo total, no es necesario seguir calculando
        if (sumaDiferencias > costoTotal) {
          return Infinity; // Devolvemos Infinity para indicar que el costo es mayor
        }
      }
    }
    return sumaDiferencias;
  }

```
### Implementación B

En la función `formingMagicSquare`, se ha reemplazado el bucle `for` por el método `forEach` para iterar sobre las matrices internas.

En la función `calcularDiferencias`, se ha utilizado el método `flatMap` para combinar las filas de las matrices y el método `map` para calcular las diferencias entre los elementos correspondientes. Luego, se utiliza el método `reduce` para sumar las diferencias y obtener el costo total.


```js
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

```