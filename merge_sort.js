function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (right - left === 0) { return [arr[left]] }
  const mid = Math.floor((left + right) / 2);
  const leftArr = mergeSort(arr, left, mid);
  const rightArr = mergeSort(arr, mid + 1, right);

  return merge(leftArr, rightArr);
}

function merge(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (arr1[i] !== undefined && arr2[j] !== undefined) {
    if (arr1[i] > arr2[j]) {
      merged.push(arr2[j]);
      j++;
    } else {
      merged.push(arr1[i]);
      i++;
    }
  }

  for (i; i < arr1.length; i++) {
    merged.push(arr1[i]);
  };

  for (j; j < arr2.length; j++) {
    merged.push(arr2[j]);
  };

  return merged;
}



console.log(mergeSort([1, 3, 2, 4, 5, 6]))
