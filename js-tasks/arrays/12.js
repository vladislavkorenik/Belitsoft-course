/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let arr = [];
    arr2.forEach( item2 => {
       arr1.forEach( (item, i) => {
        if(item == item2) {
            arr.push(item);
            delete arr1[i];
        }
    }); 
    });
    arr1.sort( (a, b) => {return a - b});
    arr1 = arr1.filter( item => item > 0);
    arr = arr.concat(arr1);
    return  arr;
};