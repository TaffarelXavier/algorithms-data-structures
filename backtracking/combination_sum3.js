// Find all possible combinations of k numbers that add up to a number n,
// given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.
//
// Note:
//
// All numbers will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:
//
// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Example 2:
//
// Input: k = 3, n = 9
// Output: [[1,2,6], [1,3,5], [2,3,4]]

function combinationSum3(k, n) {
  return getAllCombos(k, n, [], []);
}

function getAllCombos(k, n, currentCombo, allCombos, start = 1) {
  if (currentCombo.length > k || n < 0) {
    return;
  }
  if (n === 0 && currentCombo.length === k) {
    allCombos.push(currentCombo);
    return;
  }

  for (let i = start; i <= 9; i++) {
    const updatedTarget = n - i;
    if (updatedTarget >= 0 && i !== currentCombo[currentCombo.length - 1]) {
      getAllCombos(k, updatedTarget, currentCombo.concat(i), allCombos, i + 1);
    }
  }

  return allCombos;
}

combinationSum3(2, 6);
