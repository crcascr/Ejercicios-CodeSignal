/*

Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
solution(n) = true;
For n = 239017, the output should be
solution(n) = false.

*/

function solution(n) {
    const nStr = n.toString();
    const mitad = nStr.length / 2;
    let sumaPrimeraMitad=0
    let sumaSegundaMitad=0
    
    for(let i=0;i<mitad;i++){
        sumaPrimeraMitad += parseInt(nStr[i]);
    }
    
    for(let j=mitad;j<nStr.length;j++){
        sumaSegundaMitad += parseInt(nStr[j]);
    }    
    
    return sumaPrimeraMitad === sumaSegundaMitad;
}