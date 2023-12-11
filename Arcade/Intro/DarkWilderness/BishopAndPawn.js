/*
Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:


Example

For bishop = "a1" and pawn = "c3", the output should be
solution(bishop, pawn) = true.



For bishop = "h1" and pawn = "h3", the output should be
solution(bishop, pawn) = false.


*/

function solution(bishop, pawn) {
    // Función para convertir la notación de ajedrez a coordenadas
    function chessNotationToCoordinates(notation) {
        const columnas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const columna = notation[0];
        const fila = parseInt(notation[1]);
        return [columnas.indexOf(columna), fila];
    }

    // Convertir las posiciones a coordenadas
    const [bishopColumna, bishopFila] = chessNotationToCoordinates(bishop);
    const [pawnColumna, pawnFila] = chessNotationToCoordinates(pawn);

    // Verificar si el alfil puede capturar al peón en un movimiento
    return Math.abs(bishopColumna - pawnColumna) === Math.abs(bishopFila - pawnFila);
}

// Ejemplos de uso:
console.log(solution("a1", "c3")); // Salida: true
console.log(solution("h1", "h3")); // Salida: false
