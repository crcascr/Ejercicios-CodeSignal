/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

*/

function solution(s1, s2) {
    let contadorCoincidencias = 0;
    let verificado = Array(s2.length).fill(false);    

    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j] && !verificado[j]) {
                contadorCoincidencias++;
                verificado[j] = true;
                break;
            }
        }
    }

    return contadorCoincidencias;
}

// Ejemplo de uso:
const s1 = "aabcc";
const s2 = "adcaa";
console.log(solution(s1, s2)); // Debería imprimir 3
