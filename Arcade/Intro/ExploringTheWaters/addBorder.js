/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

solution(picture) = ["*****",
                     "*abc*",
                     "*ded*",
                     "*****"]

*/


function solution(picture) {
    const bordes=picture[0].toString().length+2
    const imagen=picture.length
    
    let respuesta = Array(imagen + 2).fill('');

    for (let i = 0; i < respuesta.length; i++) {
        respuesta[i] = '*'.repeat(bordes);
    }
        
    for(let i=0;i<imagen;i++){
        const texto1=`*${picture[i]}*`
        respuesta[i+1]=texto1        
    }
    return(respuesta)
}