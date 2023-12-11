/*
Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
solution(n) = 52;
For n = 1001, the output should be
solution(n) = 101.

*/

function solution(n) {
    const numeroStr = n.toString();
    let numeroFinal = 0;

    for (let i = 0; i < numeroStr.length; i++) {
        const numeroCompuesto = parseInt(numeroStr.slice(0, i) + numeroStr.slice(i + 1));

        if (numeroCompuesto > numeroFinal) {
            numeroFinal = numeroCompuesto;
        }
    }

    return numeroFinal;
}