var twoSum = function(numbers, target) {
  //Given an array of integers that is already sorted in ascending order,
  //find two numbers such that they add up to a specific target number.
  let pointer1 = 0;
  let pointer2 = numbers.length - 1;

  while (pointer1 < pointer2) {
    if (numbers[pointer1] + numbers[pointer2] > target) {
      pointer2--;
    } else if (numbers[pointer1] + numbers[pointer2] < target) {
      pointer1++;
    } else {
      return [pointer1 + 1, pointer2 + 1]; // problem wants non-zero index
    }
  }
};

console.log(twoSum([2,3,7,11,15], 18));
