// You are climbing a stair case. It takes n steps to reach to the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//
// Note: Given n will be a positive integer.
//
// Example 1:
//
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
//
// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// Approach: the number of unique ways to get to the current step (n) is the
// sum of the ways of getting to (n - 1) + (n + 2)

var climbStairs = function(n) {
  return climbStairsHelper(n, {});
};

function climbStairsHelper(n, cache) {
  if (n === 2) return 2;
  if (n === 1) return 1;
  if (n === 0) return 0;

  // if cached value exists, use it, otherwise calculate
  let result =  (cache[n - 1] || climbStairsHelper(n - 1, cache)) +
                (cache[n - 2] || climbStairsHelper(n - 2, cache));

  cache[n] = result;
  return result;
}

// O(2^N) time O(N) space without memoization; O(N) space because height of the call stack
// O(N) time O(2N) space with memoization???
console.log(climbStairs(0));
