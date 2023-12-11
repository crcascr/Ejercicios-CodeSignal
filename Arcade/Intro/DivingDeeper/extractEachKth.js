/*

Given array of integers, remove each kth element from it.

Example

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

*/

function solution(inputArray, k) {
    // Crear un arreglo de índices a eliminar
    const indicesAEliminar = [];
    for (let i = k - 1; i < inputArray.length; i += k) {
        indicesAEliminar.push(i);
    }

    // Eliminar los elementos en los índices especificados
    for (let i = indicesAEliminar.length - 1; i >= 0; i--) {
        inputArray.splice(indicesAEliminar[i], 1);
    }

    return inputArray;
}

// Ejemplo de uso
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;
const result = solution(inputArray, k);
console.log(result); // Salida esperada: [1, 2, 4, 5, 7, 8, 10]
