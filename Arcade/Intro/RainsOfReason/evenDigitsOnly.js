/*
Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
solution(n) = true;
For n = 642386, the output should be
solution(n) = false.


*/

function solution(n) {
  const arregloIngreso = n.toString();
  for (let i = 0; i < arregloIngreso.length; i++) {
    const numero = parseInt(arregloIngreso[i]);
    if (numero % 2 > 0) {
      return false;
    }
  }
  return true;
}
