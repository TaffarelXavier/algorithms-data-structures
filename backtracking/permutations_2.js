// Given a collection of numbers that might contain duplicates, return all possible unique permutations.
//
// Example:
//
// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]

// OPTION 1
// function permuteUnique(nums) {
//   return getUniquePermutations(nums);
// }

// function getUniquePermutations(nums, currentPermutation = [], currentPermutationIndices = [], allPermutations = [], seenIndices = {}, seenValues = {}) {
//   // console.log(currentPermutationIndices);
//   if (currentPermutation.length === nums.length && !seenIndices[currentPermutationIndices] && !seenValues[currentPermutation]) {
//     let currentPermutationCopy = currentPermutation.slice();
//     allPermutations.push(currentPermutationCopy);
//     seenIndices[currentPermutationIndices.slice()] = true;
//     seenValues[currentPermutationCopy] = true;
//     return;
//   }
//
//   for (let i = 0; i < nums.length; i++) {
//     if (!seenIndices[currentPermutationIndices.concat(i)] && !currentPermutationIndices.includes(i)) {
//       currentPermutation.push(nums[i]);
//       currentPermutationIndices.push(i);
//       getUniquePermutations(nums, currentPermutation, currentPermutationIndices, allPermutations, seenIndices, seenValues);
//       currentPermutation.pop();
//       currentPermutationIndices.pop();
//     }
//   }
//
//   return allPermutations;
// }

// OPTION 2
function permuteUnique(nums) {
  nums = nums.sort((a, b) => a - b);
  const result = [];

  backtrack(nums, result);
  return result;
}

function backtrack(nums, result, solution = []) {
  // base case
  if (nums.length === 0) {
    result.push(solution.slice());
    return;
  }

  // loop over possible branches
  for (let idx = 0; idx < nums.length; idx++) {
    let val = nums[idx];

    if (val === nums[idx - 1]) {
      continue;
    }

    solution.push(val);
    let numsCopy = nums.slice();
    numsCopy.splice(idx, 1);
    backtrack(numsCopy, result, solution);
    solution.pop();
  }
}
console.log(permuteUnique([1, 1, 2]))
