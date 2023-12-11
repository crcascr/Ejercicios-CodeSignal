/*
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
solution(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.


*/

function solution(inputArray, k) {
    let sumaMax = 0;
    let sumaActual = 0;

    // Calcular la suma inicial de los primeros k elementos
    for (let i = 0; i < k; i++) {
        sumaActual += inputArray[i];
    }

    // Inicializar la suma máxima con la suma inicial
    sumaMax = sumaActual;

    // Calcular la suma máxima de k elementos consecutivos
    for (let i = k; i < inputArray.length; i++) {
        sumaActual += inputArray[i] - inputArray[i - k];
        sumaMax = Math.max(sumaMax, sumaActual);
    }

    return sumaMax;
}

// Ejemplo de uso
console.log(solution([2, 3, 5, 1, 6], 2));  // Salida esperada: 8
