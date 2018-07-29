// Given an unsorted array of integers, find the length of longest increasing subsequence.
//
// Example:
//
// Input: [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Note:
//
// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.
// Follow up: Could you improve it to O(n log n) time complexity?

function lengthOfLIS(nums) {
  let longestLengthUpTo = new Array(nums.length).fill(1); // cache
  let anchor = 1;
  let runner = 0;
  for (anchor; anchor < nums.length; anchor++) {
    for (runner; runner < anchor; runner++) {
      if (nums[anchor] > nums[r unner]) {
        if (longestLengthUpTo[anchor] < longestLengthUpTo[runner] + 1) {
          longestLengthUpTo[anchor] = longestLengthUpTo[runner] + 1;
        }
      }
    }
    runner = 0;
  }

  let lengthOfLongestIS = Math.max(...longestLengthUpTo);
  return lengthOfLongestIS === -Infinity ? 0 : lengthOfLongestIS
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
