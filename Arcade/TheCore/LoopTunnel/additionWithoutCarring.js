/*

A little child is studying arithmetic. They have just learned how to add two integers, written one below another, column by column. But the child always forgets about the important part - carrying.

Given two integers, your task is to find the result that the child will get.

Note: The child had learned from this site, so feel free to check it out too if you are not familiar with column addition.

Example

For param1 = 456 and param2 = 1734, the output should be
solution(param1, param2) = 1180.

   456
  1734
+ ____
  1180
The child performs the following operations from right to left:

6 + 4 = 10 but the child forgets about carrying the 1 and just writes down the 0 in the last column
5 + 3 = 8
4 + 7 = 11 but the child forgets about the leading 1 and just writes down 1 under 4 and 7.
There is no digit in the first number corresponding to the leading digit of the second one, so the child imagines that 0 is written before 456. Thus, they get 0 + 1 = 1.


*/

function solution(param1, param2) {
    const num1 = Array.from(String(param1), Number);
    const num2 = Array.from(String(param2), Number);

    while (num1.length < num2.length) {
        num1.unshift(0);
    }

    while (num2.length < num1.length) {
        num2.unshift(0);
    }

    let result = [];

    for (let i = num1.length - 1; i >= 0; i--) {
        result.unshift((num1[i] + num2[i]) % 10);
    }

    return parseInt(result.join(''), 10);
}

// Ejemplo
console.log(solution(456, 1734)); // Salida esperada: 1180
