/*
Given an integer n, return the largest number that contains exactly n digits.

Example

For n = 2, the output should be
solution(n) = 99.


*/

function solution(n) {
    let numero = '';
    for (let i = 1; i <= n; i++) {
        numero += '9';
    }

    return parseInt(numero);
}

// Ejemplo de uso
console.log(solution(2));  // Debería imprimir 99
