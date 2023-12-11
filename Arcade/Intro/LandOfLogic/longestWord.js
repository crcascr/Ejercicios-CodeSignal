/*
Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

Example

For text = "Ready, steady, go!", the output should be
solution(text) = "steady".


*/

function solution(text) {
    const validChars = /^[A-Za-z]+$/;
    let palabras = text.split(/[^A-Za-z]+/).filter(x => x);
    console.log(palabras)
    let palabraLarga = '';
    palabras.forEach(palabra => {
        if (palabra.length > palabraLarga.length) {
            palabraLarga = palabra;
        }
    });

    return palabraLarga;
}

// Ejemplo de uso
console.log(solution("Ready[[[, steady, go!"));  // Debería imprimir "steady"
