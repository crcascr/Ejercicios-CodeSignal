/*
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
solution(matrix) = 6.


*/

function solution(a) {

    var s = new Set;
    for( var i=0; i<a.length-1; i++ ) {
        for( var j=0; j<a[0].length-1; j++ ) {
            var hash = a[i][j] + 10*a[i][j+1] + 100*a[i+1][j] + 1000*a[i+1][j+1];
            s.add( hash );
        }
    }
    
    return s.size;
}
  
  