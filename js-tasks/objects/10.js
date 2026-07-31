/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if(s == '') {
        return -1;
    }
    let arr = s.split(''), obj = {};
    
    for (let i = 0; i <= arr.length - 1; i++) {
        if(obj[arr[i]]) {
            obj[arr[i]]++;
        }
        else {
            obj[arr[i]] = 1;
        }
    }

    for (let key in obj) {
        if(obj[key] == 1) {
            return s.indexOf(key);
        }
    }
    
    return -1;
};