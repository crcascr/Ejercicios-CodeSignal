/*
Given a string, output its longest prefix which contains only digits.

Example

For inputString = "123aa1", the output should be
solution(inputString) = "123".


*/

function solution(inputString) {
  
    let numeros = "";
    let longitud = 0; 
    
    for(let character of inputString) {
  
      let digit = parseInt(character);
  
      if(Number.isInteger(digit)) {
        numeros += digit;
        longitud++;
      } else {
        break; 
      }
  
    }
  
    return numeros;
  
  }