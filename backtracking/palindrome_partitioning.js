// Given a string s, partition s such that every substring of the partition is a palindrome.
//
// Return all possible palindrome partitioning of s.
//
// Example:
//
// Input: "aab"
// Output:
// [
//   ["aa","b"],
//   ["a","a","b"]
// ]

function partition(s) {
  return getAllPalindromes(s);
}

function getAllPalindromes(s, start = 0, palindromes = [], allPalindromes = [], cache = {}) {
  if (start >= s.length) {
    allPalindromes.push(palindromes);
    return;
  }

  let substring = '';
  for (let i = start; i < s.length; i++) {
    substring += s[i];
    if (cache[substring] || isPalindrome(substring, cache)) {
      getAllPalindromes(s, i + 1, palindromes.concat(substring), allPalindromes, cache);
    }
  }

  return allPalindromes;
}

function isPalindrome(s, cache) {
  if (s.length === 1) {
    cache[s] = true;
    return true;
  } else if (s.length === 2) {
    if (s[0] === s[1]) {
      cache[s] = true;
      return true;
    }
  } else {
    if (s[0] === s[s.length - 1] && isPalindrome(s.slice(1, -1), cache)) {
      cache[s] = true;
      return true;
    }
  }

  return false;
}

console.log(partition('aab'));
