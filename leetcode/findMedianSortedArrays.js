const nums1 = [1,3];
const nums2 = [2]

var findMedianSortedArrays = function(nums1, nums2) {
    let merged = nums1.concat(nums2).sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0 ? (merged[mid] + merged[mid - 1]) / 2 : merged[mid];
};

var findMedianSortedArrays2 = function(nums1, nums2) {
    let mergedArray = [...nums1, ...nums2];
    mergedArray.sort((a, b) => a - b);
    let length = mergedArray.length;
    let mid = Math.floor(length / 2);
    return length % 2 === 0 ? (mergedArray[mid] + mergedArray[mid - 1]) / 2 : mergedArray[mid];
}

console.log(findMedianSortedArrays(nums1, nums2)); // 2.0
console.log(findMedianSortedArrays2(nums1, nums2)); // 2.0