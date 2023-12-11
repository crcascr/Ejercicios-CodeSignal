/*
CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

*/

function solution(inputString) {
    // Usar una expresión regular correcta para encontrar todos los números en la cadena
    const numbers = inputString.match(/\d+/g);

    // Si no se encuentran números, devolver 0
    if (!numbers) {
        return 0;
    }

    // Sumar los números encontrados
    const sum = numbers.reduce((acc, num) => acc + parseInt(num, 10), 0);

    return sum;
}

// Ejemplo de uso
const inputString = "2 apples, 12 oranges";
console.log(solution(inputString));  // Debería imprimir 14
