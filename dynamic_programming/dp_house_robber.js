// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint stopping
// you from robbing each of them is that adjacent houses have security system connected
// and it will automatically contact the police if two adjacent houses were broken into on the same night.

//
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
//
// Example 1:
//
// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:
//
// Input: [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.

var rob = function(nums, cache = {}) {
  return Math.max(robHelper(nums, 0, cache), robHelper(nums, 1, cache));
}

function robHelper(nums, i, cache) {
  if (i >= nums.length) {
    return 0;
  }

  let skip2Max = cache[i + 2] === undefined ? robHelper(nums, i + 2, cache) : cache[i + 2];
  let skip3Max = cache[i + 3] === undefined ? robHelper(nums, i + 3, cache) : cache[i + 3];

  let currentMax = (cache[i] === undefined ? Math.max(skip2Max, skip3Max) : cache[i]) + nums[i];

  cache[i] = currentMax;
  return currentMax;
}

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(rob([2,7,9,3,1])) // 12
// console.log(rob([1,2,3,1]))   // 4
console.log(rob([4,1,2,7,5,3,1])) // 14
