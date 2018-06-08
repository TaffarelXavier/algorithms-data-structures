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
 // starting at 0,0 we calculate the minimum sum row by row 0,1 -> 0,2 -> 1,0 ..etc
 // the min sum of a node is the Math.min of the node above it and the node to the left of it
  let cache = {};

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (row === 0 && col === 0) {
        cache[[row, col]] = grid[0][0];
        continue;
      }
      cache[[row, col]] = Math.min(retrieveMinPathAt(row - 1, col, cache),
                                   retrieveMinPathAt(row, col - 1, cache)) + grid[row][col];
    }
  }

  return cache[[grid.length - 1, grid[0].length - 1]];
}

function retrieveMinPathAt(row, col, cache) {
  if (row < 0 || col < 0) {
    return Infinity;
  }
  return cache[[row, col]];
}

console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1],
  [1,1,3]
]))
