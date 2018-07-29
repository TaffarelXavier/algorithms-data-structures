// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed. All houses at this
// place are arranged in a circle. That means the first house is the neighbor
// of the last one. Meanwhile, adjacent houses have security system connected
// and it will automatically contact the police if two adjacent houses were
// broken into on the same night.
//
// Given a list of non-negative integers representing the amount of
// money of each house, determine the maximum amount of money you can
// rob tonight without alerting the police.
//
// Example 1:
//
// Input: [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob
// house 3 (money = 2), because they are adjacent houses.

// Example 2:
//
// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.

var rob = function(nums) {
  if (nums.length === 1) return nums[0];

  const path1 = nums.slice(0, -1);
  const path2 = nums.slice(1);

  return Math.max(
    robHelper(path1, 0, {}),
    robHelper(path2, 0, {}),
    robHelper(path1, 1, {}),
    robHelper(path2, 1, {}),
    robHelper(nums, 1, {})
  );
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

console.log(rob([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([1,7,9,2]));
