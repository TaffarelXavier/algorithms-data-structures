function findNum(arr, target, idx = 0) {
  // recursive iteration through arr, incrementing idx 
  if (arr.length === 0 || idx >= arr.length) return -1;
  if (arr[idx] === target) return idx;

  return findNum(arr, target, idx + 1);
}

// O(N) time
// O(1) space
console.log(findNum([1, 4, 3, 5, 2, 1, 7], 2));
console.log(findNum([1, 4, 3, 5, 2, 1, 7], 9));
console.log(findNum([1, 4, 3, 3, 2, 1, 7], 3));
console.log(findNum([], 9));
