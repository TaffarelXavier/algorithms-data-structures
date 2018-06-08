// Question:
// Given a sorted integer array where the range of elements are [0, 99] inclusive, return its
// missing ranges.

// For example, given [0, 1, 3, 50, 75], return [“2”, “4->49”, “51->74”, “76->99”]

// Example Questions Candidate Might Ask:
// Q: What if the given array is empty?
// A: Then you should return [“0->99”] as those ranges are missing.
// Q: What if the given array contains all elements from the ranges?
// A: Return an empty list, which means no range is missing.

function missingRanges(nums) {
  let ranges = [];

  if (nums[0] > 0) {
    ranges.push(getRange(-1, nums[0]));
  }

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      continue;
    } else {
      ranges.push(getRange(nums[i - 1], nums[i]));
    }
  }

  if (nums[nums.length - 1] < 99) {
    ranges.push(getRange(nums[nums.length - 1], 100));
  }
  return ranges;
}

function getRange(a, b) {
  if ((b - a) === 2) {
    return (a + 1).toString();
  } else {
    return `${a + 1}->${b - 1}`
  }
}

console.log(missingRanges([0, 1, 3, 50, 75]))
console.log(missingRanges([2, 4]))
