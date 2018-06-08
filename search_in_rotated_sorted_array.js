// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
//
// You are given a target value to search. If found in the array return its index, otherwise return -1.
//
// You may assume no duplicate exists in the array.
//
// Your algorithm's runtime complexity must be in the order of O(log n).
//
// Example 1:
//
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
//
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

var search = function(nums, target) {
  let lowerBound = 0;
  let upperBound = nums.length - 1;

  while (lowerBound + 1 < upperBound) {
    let midPoint = Math.floor((lowerBound + upperBound) / 2);

    if (nums[midPoint] > nums[lowerBound]) {
        // left properly sorted
      if (target <= nums[midPoint] && target >= nums[lowerBound]) {
        // binary search til target is found
        upperBound = midPoint;
      } else {
        // it's on the right side
        lowerBound = midPoint;
      }
    } else if (nums[midPoint] < nums[upperBound]) {
      // right properly sorted
      if (target <= nums[upperBound] && target >= nums[midPoint]) {
      // binary search
        lowerBound = midPoint;
      } else {
        // it's on the left side
        upperBound = midPoint;
      }
    }
  }
  // console.log(lowerBound, upperBound);
  if (nums[lowerBound] === target) {
    return lowerBound;
  } else if (nums[upperBound] === target) {
    return upperBound;
  }

  return -1;
};

// console.log(search([4,5,6,7,0,1,2], 3))
console.log(search([1,3,5], 1))
