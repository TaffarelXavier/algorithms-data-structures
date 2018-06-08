// Unlike bubble sort, the smallest element bubbles to the front on each iteration

function selectionSort(arr) {
  let anchor = 0;
  let runner = anchor + 1;

  while (anchor < arr.length) {
    for (runner; runner < arr.length; runner++) {
      if (arr[anchor] > arr[runner]) {
        [arr[anchor], arr[runner]] = [arr[runner], arr[anchor]];
      }
    }
    anchor++;
    runner = anchor + 1;
  }

  return arr;
}

// O(N^2)
console.log(selectionSort([5, 4, 3, 2, 1]));
console.log(selectionSort([5, 4, 3, 2]));
