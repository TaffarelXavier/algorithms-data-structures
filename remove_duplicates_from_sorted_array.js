var removeDuplicates = function(nums) {
  // remove duplicates in place and return length of num unique elements
  // Reader Writer method: if reader !== writer, writer punches in number; when reader reaches end, writer's idx is length of unique elements
  let pointer1 = 0;

  for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
    if (nums[pointer1] !== nums[pointer2]) {
      pointer1++;
      nums[pointer1] = nums[pointer2];
    }
  }

  return pointer1 + 1;
};

// O(N) time  - reader iterates to the end and we're done
// O(1) space - done in place
removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
