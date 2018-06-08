// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
//
// Example 1:
//
// Input: "()"
// Output: true
// Example 2:
//
// Input: "()[]{}"
// Output: true
// Example 3:
//
// Input: "(]"
// Output: false
// Example 4:
//
// Input: "([)]"
// Output: false
// Example 5:
//
// Input: "{[]}"
// Output: true

function isValid(s) {
  let parensStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      parensStack.push('(');
    } else if (s[i] === '[') {
      parensStack.push('[');
    } else if (s[i] === '{') {
      parensStack.push('{');
    }

    if (s[i] === ')') {
      if (parensStack.pop() !== '(') return false;
    } else if (s[i] === ']') {
      if (parensStack.pop() !== '[') return false;
    } else if (s[i] === '}') {
      if (parensStack.pop() !== '{') return false;
    }
  }

  return parensStack.length === 0;
}

console.log(isValid('(())'));
console.log(isValid('(())()'));
console.log(isValid('(())('));
console.log(isValid('([]())(]'));
console.log(isValid("([)]"));
console.log(isValid("()[]{}"));
