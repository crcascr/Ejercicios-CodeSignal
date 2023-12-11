/*
Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

Example

For n = 3, the output should be

solution(n) = [[1, 2, 3],
               [8, 9, 4],
               [7, 6, 5]]


*/

function solution(n) {
    // Inicializa la matriz
    let matriz = Array(n).fill(0).map(() => Array(n).fill(0));

    let inicioFila = 0;
    let finFila = n - 1;
    let inicioColumna = 0;
    let finColumna = n - 1;
    let numero = 1;

    while (inicioFila <= finFila && inicioColumna <= finColumna) {
        // Bucle izquierda a derecha superior
        for (let j = inicioColumna; j <= finColumna; j++) {
            matriz[inicioFila][j] = numero++;
        }
        inicioFila++;

        // Bucle arriba a abajo
        for (let i = inicioFila; i <= finFila; i++) {
            matriz[i][finColumna] = numero++;
        }
        finColumna--;

        // Bucle derecha a izquierda inferior
        for (let k = finColumna; k >= inicioColumna; k--) {
            matriz[finFila][k] = numero++;
        }
        finFila--;

        // Bucle abajo a arriba
        for (let i = finFila; i >= inicioFila; i--) {
            matriz[i][inicioColumna] = numero++;
        }
        inicioColumna++;
    }

    return(matriz);
}

// Ejemplo de uso
solution(3);

