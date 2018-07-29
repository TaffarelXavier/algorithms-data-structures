// You need to construct a string consists of parenthesis and integers
// from a binary tree with the preorder traversing way.
//
// The null node needs to be represented by empty parenthesis pair "()".
// And you need to omit all the empty parenthesis pairs that don't affect
 // the one-to-one mapping relationship between the string and the original binary tree.
//
//
// Example 1:
// Input: Binary tree: [1,2,3,4]
//        1
//      /   \
//     2     3
//    /
//   4
//
// Output: "1(2(4))(3)"
//
// Explanation: Originally it needs to be "1(2(4)())(3()())",
// but you need to omit all the unnecessary empty parenthesis pairs.
// And it will be "1(2(4))(3)".
// Example 2:
// Input: Binary tree: [1,2,3,null,4]
//        1
//      /   \
//     2     3
//      \
//       4
//
// Output: "1(2()(4))(3)"
//
// Explanation: Almost the same as the first example,
// except we can't omit the first parenthesis pair to break the one-to-one
// mapping relationship between the input and the output.

function tree2str(node) {
  if (!node) return '';
  return getTreeString(node, node);
}

function getTreeString(node, rootNode) {
  if (!node) return '';
  let leftStr;
  let rightStr;

  if (!node.left && !node.right) {
    leftStr = '';
    rightStr = '';
  } else if (!node.left) {
    leftStr = '()'
    rightStr = getTreeString(node.right);
  } else if (!node.right) {
    leftStr = getTreeString(node.left);
    rightStr = '';
  } else {
    leftStr = getTreeString(node.left);
    rightStr = getTreeString(node.right);
  }

  let currentStr;

  if (Object.is(node, rootNode)) {
    currentStr = node.val.toString() + leftStr + rightStr;
  } else {
    currentStr = "(" + node.val.toString() + leftStr + rightStr + ")";
  }

  return currentStr;
}
