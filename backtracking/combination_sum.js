// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target),
// find all unique combinations in candidates where the candidate numbers sums to target.
//
// The same repeated number may be chosen from candidates unlimited number of times.
//
// Note:
//
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:
//
// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]
// Example 2:
//
// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]

var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => b - a);
  return getAllCombinations(candidates, target);
};

function getAllCombinations(candidates, target, currentCombo = [], allCombos = []) {
  if (target === 0) {
    allCombos.push(currentCombo);
    return;
  }

  for (let i = 0; i < candidates.length; i++) {
    // if currentCombo is empty, add candidates[i] to it
    // only add to current combo if it won't make target go below 0
    if (currentCombo.length === 0 || (candidates[i] <= currentCombo[currentCombo.length - 1] && target - candidates[i] >= 0)) {
      getAllCombinations(candidates, target - candidates[i], currentCombo.concat(candidates[i]), allCombos);
    }
  }

  return allCombos;
}

console.log(combinationSum([2, 3, 6, 7], 7))
