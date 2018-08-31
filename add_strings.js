// Given two non-negative integers num1 and num2 represented as string,
// return the sum of num1 and num2.
//
// Note:
//
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

var addStrings = function(num1, num2) {
  const map = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
  };

  num1 = reverseStr(num1);
  num2 = reverseStr(num2);

  const length = num1.length > num2.length ? num1.length : num2.length;
  let carry;
  let sumStr = '';
  let sum;

  for (let i = 0; i < length; i++) {
    let d1 = map[num1[i]];
    let d2 = map[num2[i]];
    if (d1 === undefined) {
      sum = carry ? (d2 + 1) : d2;
    } else if (d2 === undefined) {
      sum = carry ? (d1 + 1) : d1
    } else {
      sum = carry ? (d1 + d2 + 1) : (d1 + d2)
    }

    if (sum >= 10) {
      carry = true;
    } else {
      carry = false;
    }

    sumStr += (sum % 10).toString();
    if (carry && (i === length - 1)) {
      sumStr += '1';
    }
  }

  return reverseStr(sumStr).split('').map(digStr => map[digStr]).join('');
};

const reverseStr = str => {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed.concat(str[i]);
  }

  return reversed;
}
