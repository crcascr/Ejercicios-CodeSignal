/*
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
solution(cell1, cell2) = true.

For cell1 = "A1" and cell2 = "H3", the output should be
solution(cell1, cell2) = false.


*/

function solution(cell1, cell2) {
  const nombresColumnas = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const numerosFilas = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const indiceLetra1 = nombresColumnas.indexOf(cell1[0]);
  const indiceNumero1 = numerosFilas.indexOf(cell1[1]);

  const esNegro1 = (indiceLetra1 + indiceNumero1) % 2 !== 0;

  const indiceLetra2 = nombresColumnas.indexOf(cell2[0]);
  const indiceNumero2 = numerosFilas.indexOf(cell2[1]);

  const esNegro2 = (indiceLetra2 + indiceNumero2) % 2 !== 0;

  return esNegro1 === esNegro2;
}

solution("A1", "B2");
