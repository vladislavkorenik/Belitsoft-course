/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = s.split('');
    let j = arr.length - 1, temp = '';
    for(let i = 0; i <= j; i++) {
        if (arr[i].search(/[AEIOUaeiou]/) != -1) {
            for (; i <= j; j--) {
                if (arr[j].search(/[AEIOUaeiou]/) != -1) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    j--;
                    break;
                }
            }
        }
    }
    return arr.join('');
};
