/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    for (let i = A.length - 1; i >= 0; i--) {
        let sum = A[i] + K;
        if(sum > 9) {
            A[i] = sum % 10;
            K = parseInt(sum / 10);
        }
        else {
            A[i] = sum;
            K = 0;
        }
    }
     while (K > 0) {
        let temp = K % 10;
        A.unshift(temp);
        K = parseInt(K / 10);
    }
    return A;
};