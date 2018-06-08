// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
//
// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
//
// How many possible unique paths are there?
//
//
// Above is a 7 x 3 grid. How many possible unique paths are there?
//
// Note: m and n will be at most 100.
//
// Example 1:
//
// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

function uniquePaths(m, n ) {
  let cache = {};
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 && j === 1) {  // 1 path at [0,0]
        cache[[i, j]] = 1;
        continue;
      }
      cache[[i, j]] = cachedPaths(cache, i - 1, j) + cachedPaths(cache, i, j - 1);
    }
  }
  // console.log(cache);
  return cache[[m, n]];
}

function cachedPaths(cache, row, col) {
  if (row <= 0 || col <= 0) return 0;
  if (row === 1 || col === 1) return 1;
  return cache[[row, col]];
}

console.log(uniquePaths(3, 7));
