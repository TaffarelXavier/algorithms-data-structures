// Given a collection of distinct integers, return all possible permutations.
//
// Example:
//
// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

function permute(nums) {
  return getPermutations(nums);
}

function getPermutations(nums, permutation = [], allPermutations = []) {
  if (permutation.length === nums.length) {
    allPermutations.push(permutation);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!permutation.includes(nums[i])) {
      getPermutations(nums, permutation.concat(nums[i]), allPermutations);
    }
  }

  return allPermutations;
}

console.log(permute([1, 2, 3]))
