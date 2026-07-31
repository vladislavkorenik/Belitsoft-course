/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let obj = {}, count = 0;
    
    for (let i = 0; i <= S.length - 1; i++) { 
        if(obj[S.charAt(i)]) {
            obj[S.charAt(i)]++;
        }
        else {
            obj[S.charAt(i)] = 1;
        }
    }
    
    for (let i = 0; i <= J.length - 1; i++) { 
            if(obj.hasOwnProperty(J.charAt(i))) {
                count += obj[J.charAt(i)];
            }
    }

    return count;
};