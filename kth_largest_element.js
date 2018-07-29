// Find the kth largest element in an unsorted array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
//
// Example 1:
//
// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
// Example 2:
//
// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.

// Using bubble sort
// findKthLargest = function(nums, k) {
//   // since bubble sort guarantees the largest number to bubble to the top
//   // at each iteration, just do it k times and the most recent bubbled number
//   // will be our answer
//   return bubbleSortCounter(nums, k);
// }
//
// function bubbleSortCounter(nums, k) {
//   let counter = 0;
//   let end = nums.length - 1;
//
//   while (end > 0 && counter < k) {
//     for (i = 0; i < end; i++) {
//       if (nums[i] > nums[i + 1]) {
//         [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
//       }
//     }
//     end--;
//     counter++;
//   }
//
//   return nums[nums.length - k];
// }

// Using QuickSelect: IMPLEMENT

console.log(bubbleSortCounter([5, 4, 3, 2, 1], 3))
