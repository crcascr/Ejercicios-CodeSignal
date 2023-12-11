/*
Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

Example

For product = 12, the output should be
solution(product) = 26;
For product = 19, the output should be
solution(product) = -1.


*/

function solution(product) {
    if (product === 0) {
        return 10; // Caso especial para el producto 0, ya que queremos encontrar un número con un solo dígito.
    }

    if (product === 1) {
        return 1; // Caso especial para el producto 1, ya que el 1 es el único número que cumple con esta condición.
    }

    let n = 0;

    while (product > 1) {
        let found = false;

        for (let i = 9; i > 1; i--) {
            if (product % i === 0) {
                n = n * 10 + i;
                product /= i;
                found = true;
                break;
            }
        }

        if (!found) {
            return -1; // No se pudo encontrar un dígito que divida a 'product'.
        }
    }

    // Invertir el número construido
    let reversed = 0;
    while (n > 0) {
        reversed = reversed * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    return reversed;
}

// Ejemplo de uso:
console.log(solution(12)); // Debería imprimir 26
console.log(solution(19)); // Debería imprimir -1
