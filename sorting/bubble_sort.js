function bubbleSort(arr) {
  let end = arr.length - 1;
  while (end > 0) {
    for (let start = 0; start < end; start++) {
      if (arr[start] > arr[start + 1]) {
        [arr[start], arr[start + 1]] = [arr[start + 1], arr[start]];
      }
    }

    end--;
  }
  return arr;
}

console.log(bubbleSort([4, 3, 2, 1]));
