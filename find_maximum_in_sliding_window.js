// Find Maximum in Sliding Window

const findMaxSlidingWindow = (arr, window_size) => {
  let maximums = [];
  for (let i = 0; i <= arr.length - window_size; i++) {
    let max = arr[i];
    for (let j = i; j < window_size + i; j++) {
      if (arr[j] > max) max = arr[j];
    }
    maximums.push(max);
  }

  return maximums;
}
