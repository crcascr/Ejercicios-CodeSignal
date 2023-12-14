/*

Reverse the order of the bits in a given integer.

Example

For a = 97, the output should be
solution(a) = 67.

97 equals to 1100001 in binary, which is 1000011 after mirroring, and that is 67 in base 10.

For a = 8, the output should be
solution(a) = 1.


*/

function solution(a) {
    let numeroBinario = a.toString(2);
  
    // Convierte la cadena a un array, invierte los elementos y luego une de nuevo.
    numeroBinario = numeroBinario.split('').reverse().join('');
  
    const respuesta = parseInt(numeroBinario, 2);
  
    return respuesta;
  }
  
  // Ejemplo de uso:
  const a1 = 97;
  const resultado1 = solution(a1);
  console.log(resultado1); // Debería imprimir 67
  
  const a2 = 8;
  const resultado2 = solution(a2);
  console.log(resultado2); // Debería imprimir 1
  