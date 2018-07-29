// Given n pairs of parentheses, write a function to generate all
// combinations of well-formed parentheses.
//
// For example, given n = 3, a solution set is:
//
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

function generateParenthesis(n) {
  const parens = ['(', ')'];
  return generateParenthesisHelper(n, parens);
}

function generateParenthesisHelper(n, parens , sum = 0, currentCombo = '', allCombos = []) {
  if (sum < 0 || sum > n || currentCombo.length > n * 2) {
    return;
  }

  if (sum === 0 && currentCombo.length === n * 2 && !allCombos.includes(currentCombo)) {
    allCombos.push(currentCombo);
    return;
  }

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      generateParenthesisHelper(n, parens, sum + 1, currentCombo + "(", allCombos)
    } else {
      generateParenthesisHelper(n, parens, sum - 1, currentCombo + ")", allCombos)
    }
  }

  return allCombos;
}

console.log(generateParenthesis(3));
