/*
Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

Example

For n = 5, the output should be
solution(n) = 0;
For n = 100, the output should be
solution(n) = 1.
1 + 0 + 0 = 1.
For n = 91, the output should be
solution(n) = 2.
9 + 1 = 10 -> 1 + 0 = 1.


*/

function solution(n) {
    // Función para sumar los dígitos de un número
    function sumarDigitos(numero) {
        return numero.toString().split('').reduce((acumulador, digito) => acumulador + parseInt(digito), 0);
    }

    // Contador para el grado del dígito
    let grado = 0;

    // Iterativamente sumar los dígitos hasta obtener un solo dígito
    while (n >= 10) {
        n = sumarDigitos(n);
        grado++;
    }

    return grado;
}