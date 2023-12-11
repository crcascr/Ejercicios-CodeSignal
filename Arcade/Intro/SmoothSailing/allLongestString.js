/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"].

*/

function solution(inputArray) {
    let respuesta=[]
    let longitudMaxima=0
    for(let i=0;i<inputArray.length;i++){
        const valLongitud=inputArray[i].length
        if(valLongitud>longitudMaxima){
            longitudMaxima=valLongitud
            respuesta=[]
            for(let j=0;j<inputArray.length;j++){
                if(inputArray[j].length===longitudMaxima){
                    respuesta.push(inputArray[j])
                }
            }
        }
    }
    return(respuesta)
}

// Ejemplo de uso:
const inputArray = ["aba", "aa", "ad", "vcd", "aba"];
console.log(solution(inputArray)); // Debería imprimir ["aba", "vcd", "aba"]