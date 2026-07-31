/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) {
        return '';
    }
    let pref = strs[0];
    strs.forEach( (item, i , arr) => {
        while (arr[i].indexOf(pref) != 0) {
            pref = pref.substr(0, pref.length - 1);
        }
    });
    return pref;
};