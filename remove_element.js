var removeElement = function(nums, val) {
  let pointer1 = 0;
  for (let pointer2 = 0; pointer2 < nums.length; pointer2++) {
    if (nums[pointer2] !== val) {
      console.log(nums[pointer2]);
      nums[pointer1] = nums[pointer2];
      pointer1++;
    }
  }
  return i;
};

removeElement([0,1,2,2,3,0,4,2], 2)
