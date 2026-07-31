/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) {
        return false;
    }
    
    let arr_s = s.split(''), arr_t = t.split(''), obj = {};
    
    for (let i = 0 ; i <= arr_s.length - 1; i++) {
        if(obj[arr_s[i]]) {
            obj[arr_s[i]]++;
        }
        else {
            obj[arr_s[i]] = 1;
        }
    }
    
    for (let i = 0 ; i <= arr_t.length - 1; i++) {
        if(obj[arr_t[i]]) {
            obj[arr_t[i]]--;
        }
    }
    
    for (let key in obj) {
        if(obj[key] != 0) {
            return false;
        }
    }
    return true;
};