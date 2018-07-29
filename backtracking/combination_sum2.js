// Given a collection of candidate numbers (candidates) and a
// target number (target), find all unique combinations in candidates
// where the candidate numbers sums to target.
//
// Each number in candidates may only be used once in the combination.
//
// Note:
//
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:
//
// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// Example 2:
//
// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]

function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);
  return getAllUniqueCombinations(candidates, target);
}

function getAllUniqueCombinations(candidates, target, currentCombo = [], uniqueCombos = [], start = 0, seen = {}) {
  if (target === 0 && !seen[currentCombo]) {
    uniqueCombos.push(currentCombo);
    seen[currentCombo] = true;
    return;
  }

  if (target < 0) {
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    let newTarget = target - candidates[i];
    getAllUniqueCombinations(candidates, newTarget, currentCombo.concat(candidates[i]), uniqueCombos, i + 1, seen);
  }

  return uniqueCombos;
}

console.log(combinationSum2([2, 5, 2, 1, 2], 5));
