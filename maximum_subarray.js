// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
//
// Example:
//
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Divide and Conquer

function maxSubArray(nums, start = 0, end = nums.length - 1) {
// base case: when left and right array are length 1, take max of (left, right, their crossum)
  if (start === end) {
    return nums[start];
  }

  let midPoint = Math.floor((start + end) / 2)
  let leftMaxSubArray = maxSubArray(nums, start, midPoint);
  let rightMaxSubArray = maxSubArray(nums, midPoint + 1, end);
  let maxCrossSum = getMaxCrossSum(nums, start, midPoint, end);

  return Math.max(leftMaxSubArray, rightMaxSubArray, maxCrossSum);
}

// the max possible left sum + the max possible right sum is the max crosssum
function getMaxCrossSum(nums, start, midPoint, end) {
  return greatestLeftMovingSum(nums, start, midPoint) +
         greatestRightMovingSum(nums, midPoint + 1, end);
}

// calculates the maximum possible sum from the midpoint down
function greatestLeftMovingSum(nums, start, midPoint) {
  let sum = 0;
  let greatestSum = -Infinity;
  for (let i = midPoint; i >= 0; i--) {
    sum += nums[i];
    if (sum > greatestSum) greatestSum = sum;
  }
  return greatestSum;
}

// calculates the max possible sum from the midpoint up
function greatestRightMovingSum(nums, midPoint, end) {
  let sum = 0;
  let greatestSum = -Infinity;
  for (let i = midPoint; i <= end; i++) {
    sum += nums[i];
    if (sum > greatestSum) greatestSum = sum;
  }
  return greatestSum;
}


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1, 3, 1, -2, 3]))

// def dnc_problem(input)
//   # base cases go here
//
//   # division
//   left = divide_to_get_left(input)
//   right = divide_to_get_right(input)
//
//   left_result = dnc_problem(left)
//   right_result = dnc_problem(right)
//
//   # return the combination
//   return combine(left_result, result)
// end
