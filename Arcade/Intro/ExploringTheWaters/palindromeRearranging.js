/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
solution(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

*/

function solution(inputString) {
    const arregloIngreso=inputString.toString()
    const letrasEncontradas=[]
    
    for(let i=0;i<arregloIngreso.length;i++){
        const letraActual = arregloIngreso[i];

        if (!letrasEncontradas.includes(letraActual)) {
            letrasEncontradas.push(letraActual);
        }
    }
    
    const contadorLetras=Array(letrasEncontradas.length).fill(0)
    
    for(let j=0;j<arregloIngreso.length;j++){
        for(let k=0;k<contadorLetras.length;k++){
            if(letrasEncontradas[k]===arregloIngreso[j]){
                contadorLetras[k]+=1
            }
        }
    }
    
    let contadorImpares = 0;

    for (let l = 0; l < contadorLetras.length; l++) {
        if (contadorLetras[l] % 2 !== 0) {
            contadorImpares += 1;
        }
    }
    
    return contadorImpares <= 1;
}

// Ejemplo de uso:
console.log(solution("aabb"));  // Salida esperada: true