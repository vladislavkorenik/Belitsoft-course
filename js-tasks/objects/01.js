/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let obj = {};
    for (let i = 0; i <= A.length; i++) {
        if(obj.hasOwnProperty(A[i])) {
           return A[i];
           }
        obj[A[i]] = A[i];
    };
};