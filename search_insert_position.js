// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//
// You may assume no duplicates in the array.
//
// Example 1:
//
// Input: [1,3,5,6], 5
// Output: 2
// Example 2:
//
// Input: [1,3,5,6], 2
// Output: 1
// Example 3:
//
// Input: [1,3,5,6], 7
// Output: 4
// Example 4:
//
// Input: [1,3,5,6], 0
// Output: 0

var searchInsert = function(nums, target) {
  let lowerBound = 0;
  let upperBound = nums.length - 1;

  while (lowerBound + 1 < upperBound) {
    let midPoint = Math.floor((lowerBound + upperBound) / 2);
    if (nums[midPoint] > target) {
      upperBound = midPoint;
    } else if (nums[midPoint] < target) {
      lowerBound = midPoint;
    } else {
      return midPoint;
    }
  }
  // target must be the neighboring lowerBound|upperBound otherwise it doesn't exist
  if (target === nums[lowerBound]) {
    return lowerBound;
  } else if (target === nums[upperBound]) {
    return upperBound;
  }
  // target has not been found if we have reached this point
  if (target > nums[upperBound]) {
    return upperBound + 1;
  } else if (target > nums[lowerBound]) {
    return upperBound;
  } else {
    return lowerBound;
  }
};

console.log(searchInsert([1,3,5,7,9,13], 11));

// Binary search: O(logN)
// Space: O(1)
