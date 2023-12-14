/*
You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

Example

For a = 2 and b = 7, the output should be
solution(a, b) = 11.

Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7]. Converting the numbers to binary, we get [10, 11, 100, 101, 110, 111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.


*/

function solution(a, b) {
    let suma = 0;
  
    for (let i = a; i <= b; i++) {
      const numeroBinario = i.toString(2);
  
      // Itera sobre cada dígito del número binario y suma los unos.
      for (let j = 0; j < numeroBinario.length; j++) {
        if (numeroBinario[j] === '1') {
          suma++;
        }
      }
    }
  
    return suma;
  }
  
  // Ejemplo de uso:
  const a = 2;
  const b = 7;
  const resultado = solution(a, b);
  console.log(resultado); // Debería imprimir 11
  