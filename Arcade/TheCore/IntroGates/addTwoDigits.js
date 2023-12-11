/*
You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
solution(n) = 11.


*/

function solution(n) {
  // Convertir el número a cadena para poder iterar sobre sus dígitos
  const nStr = n.toString();

  let suma = 0;

  // Iterar sobre cada carácter en la cadena
  for (let i = 0; i < nStr.length; i++) {
    // Convertir el carácter nuevamente a número y sumarlo
    suma += parseInt(nStr[i], 10);
  }

  return suma;
}

// Ejemplo de uso
console.log(solution(29)); // Debería imprimir 11
