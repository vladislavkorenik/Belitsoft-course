/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let obj = {}, arr = [];
    
    for (let i = 0 ; i <= nums1.length - 1; i++) {
        obj[nums1[i]] = 1;
    }
    
    for (let i = 0 ; i <= nums2.length - 1; i++) {
        if(obj.hasOwnProperty(nums2[i])) {
            arr.push(nums2[i]);
            delete obj[nums2[i]];
        }
    }
    
    return arr;
};