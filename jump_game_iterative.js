// Given an array of non-negative integers, you are initially positioned at the first index of the array.
//
// Each element in the array represents your maximum jump length at that position.
//
// Determine if you are able to reach the last index.
//
// Example 1:
//
// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:
//
// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.

function canJump(nums) {
  // starting at the last node which is marked True,
  // can the previous node reach any node marked True? if yes, mark that node as True
  // repeat until we reach idx 0. return whether that node can reach a True node
  let cache = {};
  cache[nums.length - 1] = true;

  for (let i = nums.length - 2; i >= 0; i--) { // start at second last idx
    // if num at current idx can see any True nodes, set it to be true, otherwise it remains false
    cache[i] = false;
    if (nums[i] === 0) continue;
    for (let j = 1; j <= nums[i]; j++) {
      if (cache[i + j]) {
        cache[i] = true;
        break;
      }
    }
  }
  // console.log(cache);
  return cache[0]
}

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
