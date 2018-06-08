// Given an input string, reverse the string word by word.
//
// Example:
//
// Input: "the sky is blue",
// Output: "blue is sky the".
// Note:
//

// max 1 space b/w words
// no leading or trailing spaces


// O(N) space and time is best case for JS because strings are immutable
// O(N) time and O(1) space possible for Ruby
var reverseWords = function(str) {
  let strArr = str.split('');

  reverseArr(strArr, 0, strArr.length - 1);

  let anchor = 0;
  let runner = 0;

  for (runner; runner <= strArr.length; runner++) {
    if (strArr[runner] === ' ' || runner === strArr.length) {
      reverseArr(strArr, anchor, runner - 1);
      anchor = runner + 1;
    }
  }

  return strArr.join('');
};

function reverseArr(arr, start, end) {
  let pointer1 = start;
  let pointer2 = end;

  while (pointer1 <= pointer2) {
    [arr[pointer1], arr[pointer2]] = [arr[pointer2], arr[pointer1]];
    pointer1++;
    pointer2--;
  }
}

console.log(reverseWords("the sky is blue"));
