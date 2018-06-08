// Given an array of non-negative integers, you are initially positioned at the first index of the array.
//
// Each element in the array represents your maximum jump length at that position.
//
// Determine if you are able to reach the last index.
//
// Example 1:
//
// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:
//
// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.

var canJump = function(nums, cache = {}, idx = 0) {
  // This function returns true if the current idx can reach the end
  // returns false if landed on 0
  // otherwise keep jumping
  if (idx >= nums.length - 1) {
    return true;
  } else if (nums[idx] === 0) {
    return false;
  }

  for (let i = nums[idx]; i > 0; i--) {
    let result = (cache[idx] || canJump(nums, cache, idx + i));
    if (result) return result;
    cache[idx] = result;
  }

  return result;
};

// more concise version:
function canJump(nums, current = 0, cache = {}) {
  if (current === nums.length - 1) return true;

  for (let i = 1; i <= nums[current]; i++) {
    console.log(cache);
    if (cache[current] === false) return false;
    if (cache[current + i] !== undefined || canJump(nums, current + i)) return true;
    cache[current + i] = false;
  }

  return false;
}

// console.log(canJump([2, 3, 1, 1, 4]))
// console.log(canJump([3, 2, 1, 0, 4]))
// console.log(canJump([1,1,2,2,1,1,1]))
console.log(canJump([1,1,2,2,1,0,1]))
