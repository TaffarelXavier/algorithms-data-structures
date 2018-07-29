// Given a non-negative integer n, count all
 // numbers with unique digits, x, where 0 ≤ x < 10^n.
//
// Example:
// Given n = 2, return 91.
// (The answer should be the total numbers in the
// range of 0 ≤ x < 100, excluding [11,22,33,44,55,66,77,88,99])

var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) return 1;
  let counter = 0;
  function allUniqueDigits(n, current = []) {
    console.log(current);

    if (current.length >= n) {
      return;
    }

    for (let i = 0; i <= 9; i++) {

      if (!current.includes(i) && current[0] !== 0) {
        counter++;

        allUniqueDigits(n, current.concat(i));

      }
    }
  }

  allUniqueDigits(n);
  return counter;
};

countNumbersWithUniqueDigits(3);
