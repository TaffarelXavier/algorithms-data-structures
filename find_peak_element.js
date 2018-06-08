// A peak element is an element that is greater than its neighbors.
//
// Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.
//
// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
//
// You may imagine that nums[-1] = nums[n] = -∞.

var findPeakElement = function(nums) {
  let lowerBound = 0;
  let upperBound = nums.length - 1;

  if (nums.length === 1) { return 0 }

  while (lowerBound + 1 < upperBound) {
    let middlePoint = Math.floor((lowerBound + upperBound) / 2);

    if (nums[middlePoint] < nums[middlePoint + 1] ) {
      middlePoint++;
      lowerBound = middlePoint;
    } else if (nums[middlePoint] < nums[middlePoint - 1]) {
      middlePoint--;
      upperBound = middlePoint;
    } else {
      return middlePoint;
    }
  }

  return nums[lowerBound] > nums[lowerBound + 1] ? lowerBound : upperBound;
};

console.log(findPeakElement([1,2,1,3,5,6,4]));
