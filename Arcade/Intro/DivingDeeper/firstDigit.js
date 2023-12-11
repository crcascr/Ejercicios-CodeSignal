/*

Find the leftmost digit that occurs in a given string.

Example

For inputString = "var_1__Int", the output should be
solution(inputString) = '1';
For inputString = "q2q-q", the output should be
solution(inputString) = '2';
For inputString = "0ss", the output should be
solution(inputString) = '0'.

*/

function solution(inputString) {
    for (let i = 0; i < inputString.length; i++) {
        const digito = parseInt(inputString[i]);
        if (!isNaN(digito)) {
            return digito.toString();
        }
    }

    // Si no se encuentra ningún dígito
    return null;
}

// Ejemplos de uso
console.log(solution("var_1__Int")); // Salida esperada: '1'
console.log(solution("q2q-q"));      // Salida esperada: '2'
console.log(solution("0ss"));        // Salida esperada: '0'
