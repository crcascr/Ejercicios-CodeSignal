/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

solution(matrix) = [[1, 2, 1],
                    [2, 1, 1],
                    [1, 1, 1]]


*/

function solution(matrix) {
  let minas = matrix.map((row) => row.map((cell) => 0));
  const filas = matrix.length;
  const columnas = matrix[0].length;
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      let minasCerca = 0;
      //Arriba
      if (i > 0 && matrix[i - 1][j]) minasCerca++;
      //Abajo
      if (i < filas - 1 && matrix[i + 1][j]) minasCerca++;
      //Izquierda
      if (j > 0 && matrix[i][j - 1]) minasCerca++;
      //Derecha
      if (j < columnas - 1 && matrix[i][j + 1]) minasCerca++;
      //Diagonal derecha inferior
      if (j < columnas - 1 && i < filas - 1 && matrix[i + 1][j + 1])
        minasCerca++;
      // Diagonal derecha superior
      if (i > 0 && j < columnas - 1 && matrix[i - 1][j + 1]) minasCerca++;
      //Diagonal izquierda inferior
      if (j > 0 && i < filas - 1 && matrix[i + 1][j - 1]) minasCerca++;
      //Diagonal izquierda superior
      if (j > 0 && i > 0 && matrix[i - 1][j - 1]) minasCerca++;

      minas[i][j] = minasCerca;
    }
  }
  return minas;
}
