// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
//
// Given two integers x and y, calculate the Hamming distance.
//
// Note:
// 0 ≤ x, y < 231.
//
// Example:
//
// Input: x = 1, y = 4
//
// Output: 2
//
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
//
// The above arrows point to positions where the corresponding bits are different.

var hammingDistance = function(x, y) {
   let hDistance = 0;
   x = x.toString(2);
   y = y.toString(2);

  let longer = x.length >= y.length ? x : y;
  let shorter = x.length >= y.length ? y : x;
  let j = shorter.length - 1;

  for (var i = longer.length - 1; i >= 0; i--) {
    console.log(longer[i], shorter[j])

    if (j >= 0) {
      if (longer[i] !== shorter[j]) hDistance++;
    } else {
      if (longer[i] !== 0) hDistance++;
    }
    console.log(hDistance);
    j--;
  }

  return hDistance;
};

console.log(hammingDistance(1, 4));
