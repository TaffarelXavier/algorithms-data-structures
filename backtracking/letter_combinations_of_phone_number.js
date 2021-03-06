// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
//
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//
//
//
// Example:
//
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:
//
// Although the above answer is in lexicographical order, your answer could be in any order you want.
// 2: abc
// 3: def
// 4: ghi
// 5: jkl
// 6: mno
// 7: pqrs
// 8: tuv
// 9: wxyz
// *: +
// 0: _

function letterCombinations(digits) {
  if (digits.length === 0) return [];
  const numLetters = ['_', null, 'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
  return allLetterCombinations(digits, numLetters);
}

function allLetterCombinations(digits, numLetters, currentCombo = '', allCombos = [], i = 0) {
  if (currentCombo.length === digits.length || i >= digits.length) {
    allCombos.push(currentCombo);
    return;
  }

  const letters = numLetters[parseInt(digits[i], 10)]
  for (var j = 0; j < letters.length; j++) {
    allLetterCombinations(digits, numLetters, currentCombo + letters[j], allCombos, i + 1)
  }

  return allCombos
}

console.log(letterCombinations("23"))
