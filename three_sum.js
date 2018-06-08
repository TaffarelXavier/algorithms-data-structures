var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let anchorIdx = 0;
  let anchor = nums[anchorIdx];

  let runner1Idx = anchorIdx + 1;
  let runner1 = nums[runner1Idx];

  let runner2Idx = nums.length - 1;
  let runner2 = nums[runner2Idx];

  let triplets = [];

  while (anchorIdx < nums.length - 2) {
    if (anchor > 0) { break }

    if ((anchor + runner1 + runner2) === 0) {
      // console.log(JSON.stringify([anchor, runner1, runner2]) !== JSON.stringify(triplets[triplets.length - 1]));
      if (JSON.stringify([anchor, runner1, runner2]) !== JSON.stringify(triplets[triplets.length - 1])) {
        triplets.push([anchor, runner1, runner2])
      }
      runner1Idx++;
      runner2Idx--;

    } else if (anchor + runner1 + runner2 < 0) {
      while (nums[runner1Idx] === runner1) {
        runner1 = nums[runner1Idx];
        runner1Idx++;
      }

    } else if (anchor + runner1 + runner2 > 0) {
      while (nums[runner2Idx] === runner2) {
        runner2 = nums[runner2Idx];
        runner2Idx--;
      }
    }

    if (runner1Idx >= runner2Idx || runner2Idx <= runner1Idx) {
      while (nums[anchorIdx] === anchor) {
        anchorIdx++;
      }
      runner1Idx = anchorIdx + 1;
      runner2Idx = nums.length - 1;
    }

    anchor = nums[anchorIdx]
    runner1 = nums[runner1Idx]
    runner2 = nums[runner2Idx]
    // console.log(triplets);
  }
  console.log(triplets);
  return triplets;
};

threeSum([0,0,0,0]);
threeSum([-1,0,1,2,-1,-4]);
threeSum([-2,0,0,2,2]);
