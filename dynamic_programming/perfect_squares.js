// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.
//
// Example 1:
//
// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
// Example 2:
//
// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

function numSquares(n) {
  let squares = [];
  for (let i = 1; Math.pow(i, 2) <= n; i++) {
    squares.push(Math.pow(i, 2));
  }
  return getPerfectSquares(n, squares);
}

function getPerfectSquares(target, squares, cache = {}) {
  if (target < 0) {
    return Infinity;
  }

  if (target === 0) {
    return 0;
  }

  let minCountForTarget = Infinity;

  for (let i = 0; i < squares.length; i++) {
    if (target >= squares[i]) {
      let updatedTarget = target - squares[i];
      let countForTarget = (cache[updatedTarget] ||
          getPerfectSquares(updatedTarget, squares, cache)) + 1;
      if (countForTarget < minCountForTarget) minCountForTarget = countForTarget
    }
  }

  cache[target] = minCountForTarget;
  return minCountForTarget;
}

console.log(numSquares(12));
