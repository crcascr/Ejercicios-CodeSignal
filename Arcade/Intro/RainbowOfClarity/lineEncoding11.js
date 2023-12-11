/*

Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.
Example

For s = "aabbbc", the output should be
solution(s) = "2a3bc".

*/

function solution(s) {
    let texto = "";
    let contador = 1;

    for (let i = 0; i < s.length; i++) {
        let letraActual = s[i];
        let letraSiguiente = s[i + 1];

        if (letraActual === letraSiguiente) {
            contador++;
        } else {
            texto += (contador > 1 ? contador.toString() : "") + letraActual;
            contador = 1;  // Restablecer el contador para la próxima letra
        }
    }

    return texto;
}

// Ejemplo de uso
const resultado = solution("abbcabb");
console.log(resultado);  // Debería imprimir "a2bca2b"
