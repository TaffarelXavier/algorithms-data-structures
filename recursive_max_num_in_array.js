function maxNumInArray(arr, idx = 0, currentMax = arr[0]) {
  // recursively iteration through arr, incrementing idx
  if (arr.length === 0) { return null }
  if (idx > arr.length - 1) { return currentMax }
  if (arr[idx] > currentMax) { currentMax = arr[idx] }

  return maxNumInArray(arr, idx + 1, currentMax);
}
// O(N) time
// O(1) space - max value saved on each iteration

// let nums = [3, 4, 3, 6, 2, 7, 3];
// let nums2 = [3];
// let nums3 = [];

console.log(maxNumInArray([]));
console.log(maxNumInArray([2]));
console.log(maxNumInArray([2,3]));
console.log(maxNumInArray([4,3,3]));
console.log(maxNumInArray([1,5,2,3,4]));
