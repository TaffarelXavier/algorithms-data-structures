function binarySearch(arr, target) {
  // input: sorted array
  let floor = 0;
  let ceiling = arr.length - 1;

  while (ceiling >= floor) {
    let midpoint = Math.floor((ceiling + floor) / 2); // floor or ceil doesn't matter; half gets discarded anyway
    console.log(floor, midpoint, ceiling);
    if (target > arr[midpoint]) {
      floor = midpoint + 1; // current midpoint !== target so we incr 1
    } else if (target < arr[midpoint]) {
      ceiling = midpoint - 1; 
    } else {
      return midpoint;
    }
  }

  return null;
}

console.log(binarySearch([2, 5, 11, 16, 21, 30, 31], 22));
