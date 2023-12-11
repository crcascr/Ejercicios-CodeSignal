/*
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
solution(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
solution(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
solution(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.

*/

function solution(a, b) {
    let coincidencia=Array(a.length).fill(false)
    let contadorDiferencias = 0;
    //console.log("Coincidencia antes",coincidencia)
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            //console.log("Valor a",a[i])
            //console.log("Valor b",b[j])
            if(a[i]===b[j]&&!coincidencia[j]){
                coincidencia[j]=true
                //console.log("Coincidencia")
                
                break
            }
        }
        if (a[i] !== b[i]) {
            contadorDiferencias++;

            if (contadorDiferencias > 2) {
                return false;  // Más de un par de diferencias, no son similares
            }
        }
    }
    const todosCoinciden = coincidencia.every((value) => value);
    console.log("Coincidencia despues",coincidencia)
    console.log("Contador diferencias",contadorDiferencias)
    return todosCoinciden && contadorDiferencias <= 2;
}