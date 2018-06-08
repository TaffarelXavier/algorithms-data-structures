// Given an array of integers nums sorted in ascending order, find the starting and
// ending position of a given target value.
//
// Your algorithm's runtime complexity must be in the order of O(log n).
//
// If the target is not found in the array, return [-1, -1].
//
// Example 1:
//
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
//
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
var searchRange = function(nums, target) {
  // find first and last appearance of target
  const lowerBound = firstSearch(nums, target);
  if (lowerBound === null) return [-1, -1];
  const upperBound = secondSearch(nums, target);
  return [lowerBound, upperBound];
};

function firstSearch(nums, target) {
  let lowerBound = 0;
  let upperBound = nums.length - 1;

  while (lowerBound + 1 < upperBound) {
    let midPoint = Math.floor((upperBound + lowerBound) / 2);
    if (nums[midPoint] >= target) {
      upperBound = midPoint;
    } else if (nums[midPoint] < target) {
      lowerBound = midPoint;
    }
  }
  if (nums[upperBound] !== target && nums[lowerBound] !== target) return null;
  if (nums[lowerBound] === target) upperBound = lowerBound;
  return upperBound;
}

function secondSearch(nums, target) {
  let lowerBound = 0;
  let upperBound = nums.length - 1;

  while (lowerBound + 1 < upperBound) {
    let midPoint = Math.floor((upperBound + lowerBound) / 2);

    if (nums[midPoint] > target) {
      upperBound = midPoint;
    } else if (nums[midPoint] <= target) {
      lowerBound = midPoint;
    }
  }
  if (nums[upperBound] === target) lowerBound = upperBound;
  return lowerBound;
}

console.log(searchRange([1, 1, 3, 3, 5, 5, 5, 5, 5, 6, 7, 7, 9], 9));
// console.log(searchRange([1, 3], 1));
