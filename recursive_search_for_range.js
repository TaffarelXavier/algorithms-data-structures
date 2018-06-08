// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
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

function searchRange(nums, target) {
  return [firstInstanceOfTarget(nums, target), lastInstanceOfTarget(nums, target)]
}

function firstInstanceOfTarget(nums, target, lowerBound = 0, upperBound = nums.length - 1) {
  if (lowerBound + 1 >= upperBound) {
    if (nums[lowerBound] === target) {
      return lowerBound;
    } else if (nums[upperBound] === target) {
      return upperBound;
    } else {
      return -1;
    }
  }
  let midPoint = Math.floor((lowerBound + upperBound) / 2);

  if (nums[midPoint] >= target) {
    return firstInstanceOfTarget(nums, target, lowerBound, midPoint);
  }
  if (nums[midPoint] < target) {
    return firstInstanceOfTarget(nums, target, midPoint, upperBound);
  }
}

function lastInstanceOfTarget(nums, target, lowerBound = 0, upperBound = nums.length - 1) {
  if (lowerBound + 1 >= upperBound) {
    if (nums[upperBound] === target) {
      return upperBound;
    } else if (nums[lowerBound] === target) {
      return lowerBound;
    } else {
      return -1;
    }
  }
  let midPoint = Math.floor((lowerBound + upperBound) / 2);

  if (nums[midPoint] > target) {
    return lastInstanceOfTarget(nums, target, lowerBound, midPoint);
  }
  if (nums[midPoint] <= target) {
    return lastInstanceOfTarget(nums, target, midPoint, upperBound);
  }
}

// O(2logN) -> O(logN) time
// O(1) space -> not creating or storing any values except the constant sized array on line 17

console.log(searchRange([2, 2], 2))
console.log(searchRange([5,7,7,8,8,10], 8));
