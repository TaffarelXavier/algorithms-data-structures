var minSubArrayLen = function(s, nums) {
  // flexible window method
  let pointer1 = 0;
  let sumLength = 0;
  let currentSum = nums[pointer1];

  if (currentSum >= s) return 1;

  for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
    currentSum += nums[pointer2];

    while (currentSum >= s) {
      if ((pointer2 - pointer1 + 1) < sumLength || sumLength === 0) {
        sumLength = pointer2 - pointer1 + 1
      }
      currentSum -= nums[pointer1];
      pointer1++;
    }
  }

  return sumLength;
};

// minSubArrayLen(7, [2,3,1,2,4,3])
// minSubArrayLen(4, [1, 4, 4])
console.log(minSubArrayLen(11, [1,2,3,4,5]));
console.log(minSubArrayLen(6, [10,2,3]))
