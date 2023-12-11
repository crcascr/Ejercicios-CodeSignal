/*
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
solution(inputArray) = 3.

*/

function solution(inputArray) {
  let diferencia = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    const diferenciaAbsoluta = Math.abs(inputArray[i] - inputArray[i + 1]);
    if (diferencia < diferenciaAbsoluta) {
      diferencia = diferenciaAbsoluta;
    }
  }

  return diferencia;
}
