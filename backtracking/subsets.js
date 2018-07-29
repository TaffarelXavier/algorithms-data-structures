// Given a set of distinct integers, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
// Example:
//
// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

function subsets(nums) {
  nums.sort((a, b) => a - b);
  return getAllSubsets(nums);
}

function getAllSubsets(nums, lastNum = -Infinity, currentSubset = [], allSubsets = [[]]) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > lastNum) {
      allSubsets.push(currentSubset.concat(nums[i]));
      lastNum = nums[i];
      getAllSubsets(nums, lastNum, currentSubset.concat(nums[i]), allSubsets);
    }
  }

  return allSubsets;
}

console.log(subsets([1,2,3]))
