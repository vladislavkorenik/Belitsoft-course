/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
     A = A.map( item => {
     return item * item;    
    });
     return A.sort( (a, b) => {
     return a - b;   
    });
};