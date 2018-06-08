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


function minPathSum(grid) {
  return minPathSumHelper(grid);
}

function minPathSumHelper(grid, row = 0, col = 0, memo = {}) {
  if (row >= grid.length || col >= grid[0].length) return Infinity;
  if (row === grid.length - 1 && col === grid[0].length - 1) return grid[row][col];

  let rightPathSum = memo[[row, col + 1]] === undefined ? minPathSumHelper(grid, row, col + 1, memo) : memo[[row, col + 1]];
  memo[[row, col + 1]] = rightPathSum;
  let downPathSum = memo[[row + 1, col]] === undefined? minPathSumHelper(grid, row + 1, col, memo) : memo[[row + 1, col]];
  memo[[row + 1, col]] = leftPathSum;
  
  let result = memo[[row, col]] === undefined ? (Math.min(downPathSum, rightPathSum) + grid[row][col]) : memo[[row, col]];
  return result;
}

console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]))
