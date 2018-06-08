// Given a positive integer num, write a function which returns True if num is a perfect square else False.
//
// Note: Do not use any built-in library function such as sqrt.
//
// Example 1:
//
// Input: 16
// Returns: True
// Example 2:
//
// Input: 14
// Returns: False

var isPerfectSquare = function(num) {
  if (num === 1) return true;
  let currentNum = num;
  let lastNum;
  while (currentNum * currentNum > num) {
    lastNum = currentNum;
    currentNum = Math.floor(currentNum / 2);
  }
  // reassign to lowerBound & upperBound for clarity: Binary Search
  let lowerBound = currentNum;
  let upperBound = lastNum;

  while (lowerBound + 1 < upperBound) {
    let midPoint = Math.floor((lowerBound + upperBound) / 2);

    if (midPoint * midPoint < num) {
      lowerBound = midPoint;
    } else if (midPoint * midPoint > num) {
      upperBound = midPoint;
    } else {
      return true;
    }
  }

  if (lowerBound * lowerBound === num ||
      upperBound * upperBound === num) {
    return true;
  } else {
    return false;
  }
};



console.log(isPerfectSquare(105));
console.log(isPerfectSquare(100));
