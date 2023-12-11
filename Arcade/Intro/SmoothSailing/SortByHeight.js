/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

*/

function solution(a) {
    let arbol=Array(a.length).fill(false)
    let personas=[]
    let respuesta=[]
    
    function compararNumeros(a,b){
        return a-b
    }
    
    for(let i=0;i<a.length;i++){
        if(a[i]===-1){
            arbol[i]=true
        }else{
            personas.push(a[i])
        }
    }
    personas.sort(compararNumeros)
    let contadorPersonas=0
    for(let j=0;j<a.length;j++){        
        if(arbol[j]){
            respuesta.push(-1)            
        }else{
            respuesta.push(personas[contadorPersonas])
            contadorPersonas++      
        }
    }
    return respuesta
}

// Ejemplo de uso:
const a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(solution(a)); // Debería imprimir [-1, 150, 160, 170, -1, -1, 180, 190]