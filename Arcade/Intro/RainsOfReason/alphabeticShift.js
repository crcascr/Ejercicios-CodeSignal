/*
Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

Example

For inputString = "crazy", the output should be solution(inputString) = "dsbaz".


*/

function solution(inputString) {
    const letras = [
      'a', 'b', 'c', 'd', 'e', 'f', 
      'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r', 
      's', 't', 'u', 'v', 'w', 'x', 
      'y', 'z'
    ];
    
    let resultado=''
    for(let i=0;i<inputString.length;i++){
        const letraActual=inputString[i]
        
        const index=letras.indexOf(letraActual)
        
        const siguienteLetra=letras[(index+1)%26]
        
        resultado+=siguienteLetra
    }
    
    return resultado
}
