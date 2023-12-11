/*
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

Example

For n = 10 and firstNumber = 2, the output should be
solution(n, firstNumber) = 7.


Respuesta
Lo que nos piden es: dado el primer número (ej. 2), encontrar el número opuesto radialmente en el círculo.

Sabemos que la distancia entre números vecinos es constante.
Entonces si sumamos la mitad del total (n/2) al primer número, deberíamos llegar al opuesto.
Es decir, el opuesto será:

firstNumber + n / 2

Pero esto puede pasarse del límite (n-1), entonces debemos aplicar módulo n para "enrollar" al inicio nuevamente:

(firstNumber + n / 2) % n

*/


function solution(n, firstNumber) {
    const numero=(firstNumber+n/2)%n
    
    return numero
}
