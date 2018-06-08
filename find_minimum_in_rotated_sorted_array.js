// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
//
// Find the minimum element.
//
// You may assume no duplicate exists in the array.
//
// Example 1:
//
// Input: [3,4,5,1,2]
// Output: 1
// Example 2:
//
// Input: [4,5,6,7,0,1,2]
// Output: 0

var findMin = function(nums) {
  let lowerBound = 0;
  let upperBound = nums.length - 1;

  if (nums[upperBound] < nums[lowerBound]) {
    while (lowerBound + 1 < upperBound) {

      let midPoint = Math.floor((lowerBound + upperBound) / 2);
      if (nums[midPoint] > nums[upperBound]) {
        lowerBound = midPoint;
      } else if (nums[midPoint] < nums[upperBound]) {
        upperBound = midPoint;
      }
    }

    if (nums[lowerBound] < nums[upperBound]) {
      return nums[lowerBound];
    } else {
      return nums[upperBound];
    }
  } else {
    return nums[lowerBound];  // in the case of a non-rotated array;
  }
};

findMin([3,4,5,1,2])
