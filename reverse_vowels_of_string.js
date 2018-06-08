// Write a function that takes a string as input and reverse only the vowels of a string.
//
// Example 1:
// Given s = "hello", return "holle".
//
// Example 2:
// Given s = "leetcode", return "leotcede".
//
// Note:
// The vowels does not include the letter "y".

var reverseVowels = function(s) {
    s = s.split(''); // can't mutate JS strings in place 
    // const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let pointer1 = 0;
    let pointer2 = s.length - 1;

    while (pointer2 > pointer1) {
        while(/[^aeiou]/i.test(s[pointer2]) && pointer2 > 0) {
            pointer2--;
        }

        while(/[^aeiou]/i.test(s[pointer1]) && pointer1 < s.length - 1) {
            pointer1++;
        }

        if (pointer1 >= pointer2) break;
        [s[pointer1], s[pointer2]] = [s[pointer2], s[pointer1]];
        pointer1++;
        pointer2--;
    }

    return s.join('');
};

// O(N) time O(N) space JS solution but can be O(1) space in Ruby
// since strings can be mutated in place
