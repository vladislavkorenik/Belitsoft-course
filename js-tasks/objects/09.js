/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let obj = {}, arr = [];
    
    for (let i = 0 ; i <= nums1.length - 1; i++) {
        if(obj[nums1[i]]) {
            obj[nums1[i]]++;
        }
        else {
            obj[nums1[i]] = 1;
        }
    }
    
    for (let i = 0 ; i <= nums2.length - 1; i++) {
        if(obj[nums2[i]]) {
            obj[nums2[i]]--;
            arr.push(nums2[i]);
        }
    }
    
    return arr;
};