/*
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.



Example

For cell = "a1", the output should be
solution(cell) = 2.



For cell = "c2", the output should be
solution(cell) = 6.

*/

function solution(cell) {
    function chessNotationToCoordinates(notation) {
        const columnas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const columna = notation[0];
        const fila = parseInt(notation[1]);
        return [columnas.indexOf(columna), fila];
    }

    const [caballoColumna, caballoFila] = chessNotationToCoordinates(cell);
    const movimientosPosibles = [
        [caballoColumna - 2, caballoFila - 1],
        [caballoColumna - 2, caballoFila + 1],
        [caballoColumna - 1, caballoFila - 2],
        [caballoColumna - 1, caballoFila + 2],
        [caballoColumna + 1, caballoFila - 2],
        [caballoColumna + 1, caballoFila + 2],
        [caballoColumna + 2, caballoFila - 1],
        [caballoColumna + 2, caballoFila + 1],
    ];

    // Filtrar movimientos válidos (dentro del tablero)
    const movimientosValidos = movimientosPosibles.filter(
        ([columna, fila]) => columna >= 0 && columna < 8 && fila >= 1 && fila <= 8
    );

    return movimientosValidos.length;
}

// Ejemplo de uso
console.log(solution("a1"));  // Debería imprimir 2
console.log(solution("c2"));  // Debería imprimir 6
