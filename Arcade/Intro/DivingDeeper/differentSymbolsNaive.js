/*
Given a string, find the number of different characters in it.

Example

For s = "cabca", the output should be
solution(s) = 3.

There are 3 different characters a, b and c.


*/

function solution(s) {
    let caracteresEncontrados = new Set();

    for (let i = 0; i < s.length; i++) {
        caracteresEncontrados.add(s[i]);
    }

    return caracteresEncontrados.size;
}

// Ejemplo de uso
console.log(solution("cabca"));  // Salida esperada: 3
