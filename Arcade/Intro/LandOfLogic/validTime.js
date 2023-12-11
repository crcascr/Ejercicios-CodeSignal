/*
Check if the given string is a correct time representation of the 24-hour clock.

Example

For time = "13:58", the output should be
solution(time) = true;
For time = "25:51", the output should be
solution(time) = false;
For time = "02:76", the output should be
solution(time) = false.

*/

function solution(time) {
    const [hora,minutos]=time.split(':')
    
    if(hora>=24||minutos>59){
        return false
    }    
    
    return true
}
