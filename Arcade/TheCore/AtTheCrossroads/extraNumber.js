/*

You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

Example

For a = 2, b = 7, and c = 2, the output should be
solution(a, b, c) = 7.

The two equal numbers are a and c. The third number (b) equals 7, which is the answer.

*/

function solution(a, b, c) {
    let conteo = {};

    [a, b, c].forEach(numero => {
        if (conteo[numero]) {
            conteo[numero]++;
        } else {
            conteo[numero] = 1;
        }
    });

    for (let numero in conteo) {
        if (conteo[numero] === 1) {
            return parseInt(numero);
        }
    }
}

// Ejemplo de uso
console.log(solution(2, 7, 2));  // Debería imprimir 7
