// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
// Note:
//
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:
//
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
//
// Output: [1,2,2,3,5,6]

function merge(nums1, m, nums2, n) {
  nums1.length = m;
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < m && pointer2 < n) {
    if (nums2[pointer2] >= nums1[pointer1]) {
      pointer1++;
    } else {
      while (m > pointer1) {
        nums1[m] = nums1[m - 1];
        m--;
      }
      nums1[m] = nums2[pointer2];
      pointer2++;
    }
    m = nums1.length;
  }

  while (n > pointer2) {
    nums1.push(nums2[pointer2]);
    pointer2++;
  }
}

let arr1 = [1, 3, 5, 0, 0, 0];
let arr2 = [2, 4, 6];

merge(arr1, 3, arr2, 3);
console.log(arr1)
