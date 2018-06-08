var moveZeroes = function(nums) {
  // do not return anything; mutate nums!
  let pointer1 = 0;

  for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
    if (nums[pointer1] === 0 && nums[pointer2] !== 0) {
      [nums[pointer1], nums[pointer2]] = [nums[pointer2], nums[pointer1]];
      pointer1++;
    } else if (nums[pointer1] !== 0) {
      pointer1++;
    }
  }
  // console.log(nums);
};

moveZeroes([0,0,1,0,3,12]);


// TRY: reader writer method where reader writes in the non 0 when writer comes across function onerror (err)
// once reader reaches the end, writer writes 0's for the rest of the array
