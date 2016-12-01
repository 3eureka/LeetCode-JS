/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    var concatArray = nums1.concat(nums2);
    var median = 0;
    concatArray = concatArray.sort((a,b)=>a-b);
    var length = concatArray.length;
    if (length % 2 === 0) {
        median = (concatArray[(length/2) -1] + concatArray[(length/2)]) / 2;
    } else {
        median = concatArray[(length-1)/2];
    }
    return median;
};
