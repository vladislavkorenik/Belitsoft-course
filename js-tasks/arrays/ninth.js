/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let sorted = [], count = 0;
    heights.forEach( (item, i) => {
        sorted[i] = item;
    });
    sorted.sort( (a, b) => {return a - b});
    sorted.forEach( (item, i) => {
       if(item != heights[i]) {
           count++;
       } 
    });
    return count;
};