// Given a collection of integers that might contain duplicates,
// nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
// Example:
//
// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

function subsetsWithDup(nums) {
  let args = nums.sort((a,b) => a > b);
  return subsetsHelper(args);
}

function subsetsHelper(nums, start=0, results=[],solution=[]) {
  results.push(solution);

  for (let i = start; i < nums.length; i += 1) {
    if (i !== start && nums[i] === nums[i - 1]) {
      continue;
    }

    subsetsHelper(nums, i + 1, results, solution.concat(nums[i]));
  }

  return results;
}

console.log(subsetsWithDup([1, 2, 2]));
