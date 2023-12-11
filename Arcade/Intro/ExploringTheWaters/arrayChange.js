/*
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
solution(inputArray) = 3.

*/

function solution(inputArray) {
    let sumaIngreso=0
    for(let i=0;i<inputArray.length-1;i++){
        while (inputArray[i + 1] <= inputArray[i]) {
            inputArray[i + 1] += 1;
            sumaIngreso += 1;
        }
    }
    
    return(sumaIngreso)
}

// Ejemplo de uso:
console.log(solution([1, 1, 1]));  // Debería devolver 3