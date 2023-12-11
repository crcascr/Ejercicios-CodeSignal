/*
Determine if the given character is a digit or not.

Example

For symbol = '0', the output should be
solution(symbol) = true;
For symbol = '-', the output should be
solution(symbol) = false.

*/

function solution(symbol) {
    const simbolo=parseInt(symbol)
    if(!isNaN(simbolo)){
        return true
    }else{
        return false
    }
}
