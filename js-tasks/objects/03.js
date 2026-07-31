/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};
    for (let i = 0; i <= nums.length - 1; i++) {
       obj[nums[i]] = obj.hasOwnProperty(nums[i]) ? 0 : 1;
    }  
    for (let key in obj) {
        if(obj[key] == 1) {
            return key;
        }
    }
};