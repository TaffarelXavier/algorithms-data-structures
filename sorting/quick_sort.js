function quickSort(array, left = 0, right = array.length - 1) {
  // base case, when two pointers meet or cross
  if (left >= right) { return; }

  // partition and return pivot
  let pivotIdx = partition(array, left, right);

  // recursively repeat with smaller left-sub-array, and then right-sub-array
  quickSort(array, left, pivotIdx - 1);
  quickSort(array, pivotIdx + 1, right);
}

// Partition Style 2:
function partition(array, left, right) {
  // right most element as the pivot
  let pivotVal = array[right];

  let anchor = left - 1;
  // swap all the smaller values down to the left
  for (let runner = left; runner <= right - 1; runner++) {
    // if runner less than or equal to the pivot value
    if (array[runner] <= pivotVal) {
      // move runner val down to the left
      anchor++;
      [array[anchor], array[runner]] = [array[runner], array[anchor]];
    }
  }

  // swap the pivot and the next value larger than it (so all values to its left are smaller)
  [array[anchor + 1], array[right]] = [array[right], array[anchor + 1]];
  return anchor + 1;
}
let arr = [5, 4, 3, 1, 2, 7];
quickSort(arr);
console.log(arr);
