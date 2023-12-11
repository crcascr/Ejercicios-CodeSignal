/*
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
solution(inputArray) = 4.


*/

function solution(inputArray) {
    const mayorNumero = Math.max(...inputArray);
    const obstaculo = Array(mayorNumero + 2).fill(false); // Aumentamos el tamaño del array por si acaso
    const saltoInicial = 1;
  
    for (let i = 0; i < inputArray.length; i++) {
      obstaculo[inputArray[i]] = true;
    }
  
    function hayObstaculo(posicion) {
      return obstaculo[posicion];
    }
  
    for (let salto = saltoInicial; salto <= mayorNumero + 1; salto++) {
      let sinObstaculos = true;
  
      for (let posicion = 0; posicion <= mayorNumero; posicion += salto) {
        if (hayObstaculo(posicion)) {
          sinObstaculos = false;
          break;
        }
      }
  
      if (sinObstaculos) {
        return salto;
      }
    }
  
    return mayorNumero + 1; // En caso de que no haya un salto suficiente para evitar obstáculos
  }

console.log(solution([5, 3, 6, 7, 9]))
