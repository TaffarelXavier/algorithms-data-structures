// Given an array (list) of intervals as input where each interval has a start and end
// timestamps. Input array is sorted by starting timestamps. You are required to merge
// overlapping intervals and return output array (list).
//
// Consider below input array. Intervals (1, 5), (3, 7), (4, 6), (6, 8) are overlapping
// so should be merged to one big interval (1, 8). Similarly intervals (10, 12) and (12, 15)
// are also overlapping intervals and should be merged to (10, 15).

let find_busy_intervals = function(v1) {
  if (v1.length === 0) return [{}];
  let mergedInterval = [v1[0]];
  let checkIdx = 0;

  for (let i = 1; i < v1.length; i++) {
    if (v1[i].first >= mergedInterval[checkIdx].first && v1[i].first <= mergedInterval[checkIdx].second) {
      mergedInterval[checkIdx].second = mergedInterval[checkIdx] > v1[i].second ? mergedInterval[checkIdx] : v1[i].second;
    } else {
      checkIdx++;
      mergedInterval[checkIdx] = v1[i];
    }
  }

  return mergedInterval;
};

// [1, 5], [3, 7], [4, 7], [6, 8]
// [1, 5]: if 3 > 1 && 3 < 5, merge intervals -> take larger of 5 & 7 -> [1, 7];
// [1, 7]: if 4 > 1 && 4 < 7, merge intervals -> take larger of 7 & 7 -> [1, 7];

console.log(find_busy_intervals([
  {"first":4,"second":12},
  {"first":13,"second":16},
  {"first":19,"second":20},
  {"first":20,"second":24}])
);
