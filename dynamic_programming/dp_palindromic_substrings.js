// Given a string, your task is to count how many palindromic substrings in this string.
//
// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
//
// Example 1:
// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
// Note:
// The input string length won't exceed 1000.

function countSubstrings(str, cache = {}) {
  let windowSize = 1;
  let palindromeCounter = 0;

  while (windowSize <= str.length) {
    for (let start = 0; start + windowSize <= str.length; start++) {
      let currentSubstring = str.slice(start, start + windowSize);
      let stringIsPalindrome = cache[currentSubstring] === undefined ? isPalindrome(currentSubstring, cache) : cache[currentSubstring];
      cache[currentSubstring] = stringIsPalindrome;
      if (stringIsPalindrome) {
        palindromeCounter++;
      }
    }
    windowSize++;
  }

  return palindromeCounter;
}

function isPalindrome(str, cache) {
  if (str.length === 1) {
    return true;
  } else if (str.length === 2) {
    if (str[0] === str[1]) {
      return true;
    }
  } else {
    if (str[0] === str[str.length - 1] && cache[str.slice(1, -1)]) {
      return true;
    }
  }
  return false;
}
