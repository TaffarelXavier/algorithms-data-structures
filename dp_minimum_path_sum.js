// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
//
// Note: You can only move either down or right at any point in time.
//
// Example:
//
// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

// with memoization:
function minPathSum(grid) {
  return minPathSumHelper(grid);
}

function minPathSumHelper(grid, row = 0, col = 0, cache = {}) {
  if (row >= grid.length || col >= grid[0].length) {
    return Infinity;
  } else if (row === grid.length - 1 && col === grid[0].length - 1) {
    return grid[row][col];
  }

  let minRightSum = (cache[[row, col + 1]] || minPathSumHelper(grid, row, col + 1, cache));
  cache[[row, col + 1]] = minRightSum;
  let minDownSum = (cache[[row + 1, col]] || minPathSumHelper(grid, row + 1, col, cache));
  cache[[row + 1, col]] = minDownSum;

  return grid[row][col] +   Math.min(minRightSum, minDownSum);
}

// console.log(minPathSum([
//   [1,3,10],
//   [1,5,1],
//   [6,2,1]
// ]))

console.log(minPathSum([
  [1,20,1],
  [1,4,3],
]))
