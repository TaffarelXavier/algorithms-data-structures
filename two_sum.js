var twoSum = function(nums, target) {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    let complementNum = target - nums[i];
    if (seen[complementNum] || seen[complementNum] === 0) {
      return [seen[complementNum], i]
    } else {
      seen[nums[i]] = i;
    }
  }
};


twoSum([2, 7, 11, 15], 9)
twoSum([3,2,4], 6);
