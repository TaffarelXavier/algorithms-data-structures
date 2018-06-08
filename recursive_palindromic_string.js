function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else if (str.slice(0, 1) === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1))
  } else {
    return false;
  }
}
// O(N) time
// O(N) space because we're keeping track of a new string input on each recurse

function isPalindrome(str, startIdx = 0, endIdx = str.length - 1) {
  // 2 pointer recursive
  if (str[startIdx] !== str[endIdx]) {
    return false;
  } else if (startIdx >= endIdx) {
    return true;
  }

  return isPalindrome(str, startIdx + 1, endIdx - 1);
}
// O(N) time
// O(1) space because we're passing in the original string each time

console.log(isPalindrome('abccba'))
console.log(isPalindrome('abccb'))
console.log(isPalindrome('a'))
console.log(isPalindrome('ab'))
console.log(isPalindrome(''))
