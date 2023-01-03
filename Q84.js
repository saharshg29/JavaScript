// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

var findMedianSortedArrays = function(nums1, nums2) {
    let total = [...nums1, ...nums2]
    total.sort((a,b) => {
        return a-b
    })
    if (total.length%2 === 0) {
        console.log((total[total.length/2 - 1] + total[total.length/2])/2);
    }else {
        let element = total[Math.round(total.length / 2)-1]
        console.log(element);
    }
};

let nums1 = [1,3]
let nums2 = [2,4]

findMedianSortedArrays(nums1, nums2)