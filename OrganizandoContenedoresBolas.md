x
# Contenedores organizadores de bolas

Dado un conjunto de contenedores numerados del 0 al *n*, cada uno de ellos contiene un número de bolas que puede ser del tipo 0 al *n*. En otras palabras, hay la misma cantidad de tipos de bolas que de contenedores. Por ejemplo, consideremos la siguiente tabla:

| Contenedor/Tipo | 0 | 1 | 2 |
|---|---|---|---|
| 0 | 2 | 3 | 1 |
| 1 | 4 | 0 | 1 |
| 2 | 1 | 3 | 3 |

Tenemos 3 contenedores (denominados 0, 1 y 2) y 3 tipos de bolas con números diferentes (0, 1, 2).
- El contenedor 0 tiene 6 bolas: 2 bolas del tipo 0, 3 bolas del tipo 1 y 1 bola del tipo 2.
- El contenedor 1 tiene 5 bolas: 4 bolas del tipo 0 y 1 bola del tipo 2.
- El contenedor 2 tiene 7 bolas: 1 bola del tipo 0, 3 bolas del tipo 1 y 3 bolas del tipo 2.

El objetivo es clasificar las bolas de manera que se cumplan las siguientes condiciones:
- Cada contenedor solo puede contener bolas del mismo tipo.
- No puede haber bolas del mismo tipo en diferentes contenedores.

Para lograr esta clasificación, solo se permite realizar la operación de intercambio, es decir, se pueden intercambiar dos bolas ubicadas en diferentes contenedores. Esta operación se puede repetir tantas veces como sea necesario.

## Desafío:
Completar la función `organizingContainers` que cumple con los siguientes requerimientos:

**Entrada:**
- `int container[n][m]`: una matriz bidimensional de enteros que representa el número de bolas de cada tipo en cada contenedor. Por ejemplo:

```js
const matriz1 = [  
  [2, 3, 1],
  [4, 0, 1],
  [1, 3, 3]
];
```
**Salida:**
- `String`: `'Possible'` o `'Impossible'`. Devuelve `'Possible'` si es posible que cada contenedor solo contenga bolas del mismo tipo y no haya dos bolas del mismo tipo en contenedores diferentes, es decir, si es posible almacenar cada tipo de bola en un contenedor. Devuelve `'Impossible'` si no es posible realizar esa clasificación.

El programa en la terminal tendrá el siguiente formato de entrada:

1. Se solicitará el número entero de consultas a realizar, llamémolos $q$.
2. Para cada consulta:
   - Se debe ingresar un número entero que representa el número de contenedores (filas) y tipos de bolas (columnas).
   - Luego, cada una de las siguientes *n* líneas contendrá *n* enteros separados por espacios que describen la fila `containers[i]`.

Para cada consulta, imprime "Possible" en una nueva línea si se pueden clasificar las bolas de acuerdo con las condiciones mencionadas anteriormente para la matriz dada. De lo contrario, imprime "Impossible".

### Ejemplo:

Supongamos que queremos realizar 3 consultas. Para cada consulta, mostraremos una tabla explicativa y cómo se representaría en la terminal:

**Consulta 1:**

Contenedor/Tipo | 0 | 1 | 2
---|---|---|---
 0 | 1 | 3 | 1
 1 | 2 | 1 | 2
 2 | 3 | 3 | 3

En la terminal:
```
1 3 1
2 1 2
3 3 3
```

**Consulta 2:**

Contenedor/Tipo | 0 | 1 | 2
---|---|---|---
 0 | 0 | 2 | 1
 1 | 1 | 1 | 1
 2 | 2 | 0 | 0


En la terminal:
```
0 2 1
1 1 1
2 0 0
```

**Consulta 3:**

Contenedor/Tipo | 0 | 1
---|---|---
 0 | 0 | 2
 1 | 1 | 1


En la terminal:
```
0 2
1 1
```

Ejemplo de entrada para las tres consultas:
```
3 // q = 3 indica tres consultas
3 // n = 3 matriz 3x3 (primera consulta)
1 3 1
2 1 2
3 3 3
3 // n = 3 matriz 3x3 (segunda consulta)
0 2 1
1 1 1
2 0 0
2 // n = 2 matriz 2x2 (tercera consulta)
0 2
1 1
```

Ejemplo de salida en la terminal:
```
Impossible
Possible
Impossible
```
## Solución:

Para clasificar las bolas, solo se permite la operación de intercambio, es decir, se pueden intercambiar dos bolas ubicadas en diferentes contenedores. Con base en esta premisa, cada contenedor tiene una capacidad fija que puede ser diferente o igual a la de los demás contenedores. Por lo tanto, para asegurar que cada contenedor contenga solo bolas del mismo tipo, es necesario que la cantidad de bolas de cada tipo, *T0, T1,... Tn*, coincida con las capacidades de los contenedores, *C0, C1,... Cn*, para poder colocar las bolas de cada tipo en el contenedor que tenga la capacidad adecuada.

Por ejemplo para las tres consultas anteriores miremos las siguientes tablas donde TC representa la capacidad de cada contenedor y TB representa el númro de bolas de cada tipo.

**Consulta 1:**

Contenedor/Tipo | 0 | 1 | 2 | TC |
---|---|---|---|---|
 0 | 1 | 3 | 1 | 5 |
 1 | 2 | 1 | 2 | 5 |
 2 | 3 | 3 | 3 | 9 |
 TB| 6 | 7 | 6 | 

Contenedor| 0 | 1 | 2 
---|---|---|---
 Capcidad | 5 | 5 | 9 

 Tipo| 0 | 1 | 2 
---|---|---|---
 Cantidad | 6 | 7 | 6 

La cantidad de bolas de cada tipo no coincide con la capacidad de los contenedores. Por lo que la clasificación es imposible.

**Consulta 2:**

Contenedor/Tipo | 0 | 1 | 2 | TC |
---|---|---|---|---|
 0 | 0 | 2 | 1 | 3 |
 1 | 1 | 1 | 1 | 3 |
 2 | 2 | 0 | 0 | 2 |
 TB| 3 | 3 | 2 | 

Contenedor| 0 | 1 | 2 
---|---|---|---
 Capcidad | 3 | 3 | 2 

 Tipo| 0 | 1 | 2 
---|---|---|---
 Cantidad | 3 | 3 | 2 

 La cantidad de bolas de cada tipo coincide con las capacidades de los contenedores. Por lo que la clasificación es posible.


**Consulta 3:**

Contenedor/Tipo | 0 | 1 | TC
---|---|---|---|
 0 | 0 | 2 | 2 |
 1 | 1 | 1 | 2 |
 TB| 1 | 3 |

 Contenedor| 0 | 1 | 
---|---|---|
 Capcidad | 2 | 2 | 

Tipo| 0 | 1 | 
---|---|---|
 Cantidad | 1 | 3 | 

La cantidad de bolas de cada tipo no coincide con la capacidad de los contenedores. Por lo que la clasificación es imposible.


**Una posible solución es la siguiente:**
1. Generar un array de n elementos con las capacidades de cada contenedor.
2. Generar un array de n elementos con las cantidades de cada tipo de bola.
3. Ordenar ambos arrays.
4. Si los arrays son idénticos, devolver "Possible"; de lo contrario, devolver "Impossible".


```javascript
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
```

Ahora, veamos en detalle cómo se utilizan `map` y `reduce` en cada parte de la función:

1. Cálculo de sumatorios por fila utilizando `map` y `reduce`:
```javascript
const contenedores = matriz.map(fila => fila.reduce((suma, elemento) => suma + elemento, 0));
```
   - `map` se utiliza para iterar sobre cada fila de la matriz.
   - `reduce` se utiliza en cada fila para calcular la suma de sus elementos.
   - El valor inicial de `reduce` se establece en 0 (`0`) para comenzar la suma desde cero en cada fila.
   - El resultado de `reduce` se asigna a la matriz `contenedores`, que almacenará los sumatorios por fila.

2. Cálculo de sumatorios por columna utilizando `reduce` y `map`:
```javascript
const tipos = matriz.reduce((columnas, fila) =>
  fila.map((elemento, indice) => (columnas[indice] || 0) + elemento), []);
```
   - `reduce` se utiliza para iterar sobre cada fila de la matriz.
   - `map` se utiliza en cada fila para acceder a cada elemento de la fila y realizar la suma correspondiente en la columna correspondiente.
   - `columnas` es el acumulador que almacena las sumas por columna.
   - En cada iteración, se utiliza `map` para sumar el elemento de la fila actual con el elemento correspondiente en `columnas` (o 0 si no existe).
   - Al finalizar, el resultado de `reduce` se asigna a la matriz `tipos`, que almacenará los sumatorios por columna.

En resumen, `map` se utiliza para iterar sobre cada fila de la matriz y aplicar una función a cada elemento, mientras que `reduce` se utiliza para realizar cálculos acumulativos en cada fila (para sumar elementos) o en toda la matriz (para acumular sumas por columna).

```js
// Ejemplo de uso
const matriz1 = [  [1, 3, 1],
  [2, 1, 2],
  [3, 3, 3]
];
console.log(organizingContainers(matriz1)); // Imprime "Impossible"

const matriz2 = [  [0, 2, 1],
  [1, 1, 1],
  [2, 0, 0]
];
console.log(organizingContainers(matriz2)); // Imprime "Possible"

const matriz3 = [  [0, 2],
  [1, 1]
];
console.log(organizingContainers(matriz3)); // Imprime "Impossible"

```

