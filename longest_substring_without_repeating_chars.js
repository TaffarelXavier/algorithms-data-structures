// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
  // anchor runner
  if (s.length === 0) return 0;
  let anchor = 0;
  let runner = anchor + 1;
  let currentSeen = {};
  currentSeen[s[anchor]] = anchor;
  let longest = 1;

  while (s[runner]) {
    if (currentSeen[s[runner]] === undefined) {
      currentSeen[s[runner]] = runner;
      runner++;
    } else {
      longest = ((runner - anchor) > longest) ?
                (runner - anchor) : longest;
      while (s[anchor] !== s[runner]) {
        currentSeen[s[anchor]] = false;
        anchor++;
      }
      anchor = currentSeen[s[runner]] + 1;
      runner = anchor + 1;

      currentSeen = {};
      currentSeen[s[anchor]] = anchor;
    }
  }

  longest = ((runner - anchor) > longest) ?
            (runner - anchor) : longest;
            
  return longest;
};

// O(N) time
// O(1) space even though we're building a hashmap, the total number of possible characters
// is limited
console.log(lengthOfLongestSubstring("abcdabc"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("abcdefabc"));
