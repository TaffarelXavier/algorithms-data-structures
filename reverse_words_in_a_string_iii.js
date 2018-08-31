// Given a string, you need to reverse the order of characters in each word
// within a sentence while still preserving whitespace and initial word order.
//
// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there
// will not be any extra space in the string.

// var reverseWords = function(s) {
//   return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// };

// O(N * M) space and time

function reverseWords(str) {
  let runner = 0;
  let output = '';

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === ' ' || i === str.length) {
      runner = i - 1;

      while (str[runner] !== ' ' && runner >= 0) {
        output += str[runner];
        runner--;
      }

      if (i < str.length) output += ' ';
    }
  }

  return output;
}

console.log(reverseWords("Let's take LeetCode contest"))

// R
// hi i'm steven
//   r
