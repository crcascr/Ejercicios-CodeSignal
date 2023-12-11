/*



*/

function solution(votes, k) {
    // find the most voted
   const max = Math.max(...votes);
   
   let count = 0
   
   // if there are no votes left
   if (k === 0) {
       
       // if the most voted is unique return 1
       //   otherwise 0
       for (vote of votes)
           if (vote === max)
               count ++
       
       return count === 1 ? 1 : 0
   }

   // those who added all the remaining votes can surpass the most voted could potentially win
   for (vote of votes)
       if (max < vote + k)
           count++
   
   return count;
}

// Ejemplo de uso
const votes = [2, 3, 5, 2];
const k = 3;
const resultado = solution(votes, k);
console.log(resultado);  // Debería imprimir 2