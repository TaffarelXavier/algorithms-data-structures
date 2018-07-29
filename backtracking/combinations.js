// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
//
// Example:
//
// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

function combine(n, k) {
  return allCombinations(n, k);
}

function allCombinations(n, k, currentCombination = [], allCombos = []) {
  if (currentCombination.length === k) {
    allCombos.push(currentCombination);
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (i > currentCombination[currentCombination.length - 1] || currentCombination.length === 0) {
      allCombinations(n, k, currentCombination.concat(i), allCombos);
    }
  }

  return allCombos;
}

console.log(combine(4, 2));
