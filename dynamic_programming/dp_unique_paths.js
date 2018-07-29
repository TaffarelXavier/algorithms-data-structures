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
// Example 2:
//
// Input: m = 7, n = 3
// Output: 28

var uniquePaths = function(m, n) {
  return uniquePathsHelper(m, n, {});
};

function uniquePathsHelper(m, n, cache) {
  if (m <= 0 || n <= 0) return 0;
  if (m === 1 && n === 1) return 1;

  let result = (cache[[m - 1, n]] || uniquePathsHelper(m - 1, n, cache)) +
               (cache[[m, n - 1]] || uniquePathsHelper(m, n - 1, cache));
  cache[[m, n]] = result;

  return result;
}

// without memoization: O(2^(M x N)) time O(M x N) space
// with memoization: O(N x M) time O(M x N) space

console.log(uniquePaths(7, 3));
