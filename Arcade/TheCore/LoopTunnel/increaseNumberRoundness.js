/*

Define an integer's roundness as the number of trailing zeroes in it.

Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits.

Example

For n = 902200100, the output should be
solution(n) = true.

One of the possible ways to increase roundness of n is to swap digit 1 with digit 0 preceding it: roundness of 902201000 is 3, and roundness of n is 2.

For instance, one may swap the leftmost 0 with 1.

For n = 11000, the output should be
solution(n) = false.

Roundness of n is 3, and there is no way to increase it.


*/

function solution(n) {
    let ceroEncontrado = false;
    let numeroDespuesCero = false;

    // Convertir el número a una cadena para iterar sobre sus dígitos
    const strN = n.toString();

    for (let i = 0; i < strN.length; i++) {
        if (strN[i] === '0') {
            ceroEncontrado = true;
        }

        if (strN[i] !== '0' && ceroEncontrado) {
            numeroDespuesCero = true;
        }
    }

    return ceroEncontrado && numeroDespuesCero;
}

// Ejemplos
console.log(solution(902200100)); // Salida esperada: true
console.log(solution(11000)); // Salida esperada: false
