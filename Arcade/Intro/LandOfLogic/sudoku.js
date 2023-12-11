/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

Example

For
grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
        [4, 6, 5, 8, 7, 9, 3, 2, 1],
        [7, 9, 8, 2, 1, 3, 6, 5, 4],
        [9, 2, 1, 4, 3, 5, 8, 7, 6],
        [3, 5, 4, 7, 6, 8, 2, 1, 9],
        [6, 8, 7, 1, 9, 2, 5, 4, 3],
        [5, 7, 6, 9, 8, 1, 4, 3, 2],
        [2, 4, 3, 6, 5, 7, 1, 9, 8],
        [8, 1, 9, 3, 2, 4, 7, 6, 5]]
the output should be
solution(grid) = true;

For
grid = [[8, 3, 6, 5, 3, 6, 7, 2, 9],
        [4, 2, 5, 8, 7, 9, 3, 8, 1],
        [7, 9, 1, 2, 1, 4, 6, 5, 4],
        [9, 2, 1, 4, 3, 5, 8, 7, 6],
        [3, 5, 4, 7, 6, 8, 2, 1, 9],
        [6, 8, 7, 1, 9, 2, 5, 4, 3],
        [5, 7, 6, 9, 8, 1, 4, 3, 2],
        [2, 4, 3, 6, 5, 7, 1, 9, 8],
        [8, 1, 9, 3, 2, 4, 7, 6, 5]]
the output should be
solution(grid) = false.

The output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.


*/

function solution(grid) {
  const numerosValidos = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Verificar filas
  for (let i = 0; i < grid.length; i++) {
    const fila = grid[i];
    if (!verificarArreglo(fila, numerosValidos)) {
      return false;
    }
  }

  // Verificar columnas
  for (let j = 0; j < grid[0].length; j++) {
    const columna = [];
    for (let i = 0; i < grid.length; i++) {
      columna.push(grid[i][j]);
    }
    if (!verificarArreglo(columna, numerosValidos)) {
      return false;
    }
  }

  // Verificar submatrices
  for (let i = 0; i < grid.length; i += 3) {
    for (let j = 0; j < grid[0].length; j += 3) {
      const submatriz = [];
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          submatriz.push(grid[i + k][j + l]);
        }
      }
      if (!verificarArreglo(submatriz, numerosValidos)) {
        return false;
      }
    }
  }

  return true;
}

function verificarArreglo(arreglo, numerosValidos) {
  const numerosEnArreglo = arreglo.filter((numero) =>
    numerosValidos.includes(numero)
  );
  return new Set(numerosEnArreglo).size === numerosEnArreglo.length;
}

// Ejemplos de uso
console.log(
  solution([
    [1, 3, 2, 5, 4, 6, 9, 8, 7],
    [4, 6, 5, 8, 7, 9, 3, 2, 1],
    [7, 9, 8, 2, 1, 3, 6, 5, 4],
    [9, 2, 1, 4, 3, 5, 8, 7, 6],
    [3, 5, 4, 7, 6, 8, 2, 1, 9],
    [6, 8, 7, 1, 9, 2, 5, 4, 3],
    [5, 7, 6, 9, 8, 1, 4, 3, 2],
    [2, 4, 3, 6, 5, 7, 1, 9, 8],
    [8, 1, 9, 3, 2, 4, 7, 6, 5],
  ])
); // true
console.log(
  solution([
    [8, 3, 6, 5, 3, 6, 7, 2, 9],
    [4, 2, 5, 8, 7, 9, 3, 8, 1],
    [7, 9, 1, 2, 1, 4, 6, 5, 4],
    [9, 2, 1, 4, 3, 5, 8, 7, 6],
    [3, 5, 4, 7, 6, 8, 2, 1, 9],
    [6, 8, 7, 1, 9, 2, 5, 4, 3],
    [5, 7, 6, 9, 8, 1, 4, 3, 2],
    [2, 4, 3, 6, 5, 7, 1, 9, 8],
    [8, 1, 9, 3, 2, 4, 7, 6, 5],
  ])
); // false
