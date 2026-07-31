/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let letter = A[0].split(''), array = [], count = 0;
    for (let j = 0; j <= letter.length; j++) {
    A.forEach( (item, i , arr) => {
        if (item.indexOf(letter[j]) != -1) {
            count++;
            arr[i] = arr[i].replace(letter[j], '');
        }
        if (count == A.length) {
            array.push(letter[j]);
        }
    });
        count = 0;
}
    return array;
};