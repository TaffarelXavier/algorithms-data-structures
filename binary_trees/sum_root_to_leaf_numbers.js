// Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
//
// An example is the root-to-leaf path 1->2->3 which represents the number 123.
//
// Find the total sum of all root-to-leaf numbers.
//
// Note: A leaf is a node with no children.
//
// Example:
//
// Input: [1,2,3]
//     1
//    / \
//   2   3
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.
// Example 2:
//
// Input: [4,9,0,5,1]
//     4
//    / \
//   9   0
//  / \
// 5   1
// Output: 1026
// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.

var sumNumbers = function(node) {
  if (!node) return 0;
  let nums = []
  sumNumbersHelper(node, nums);
  return nums.reduce((sum, n) => {
    return sum + parseInt(n, 10)
  }, 0);
};

function sumNumbersHelper(node, nums, stack = []) {
  if (!node) return;
  stack.push(node.val);

  if (isLeaf(node)) {
    nums.push(stack.join(''));
    stack.pop();
    return;
  }
  sumNumbersHelper(node.left, nums, stack);
  sumNumbersHelper(node.right, nums, stack);
  stack.pop();
}

function isLeaf(node) {
  return !node.left && !node.right;
}

class TreeNode {
  constructor(val, left=null, right=null) {
    this.left = left;
    this.right = right;
    this.val = val;
  }
}

rootNode = new TreeNode(1);
node2 = new TreeNode(2);
rootNode.left = node2;
node3 = new TreeNode(3);
rootNode.right = node3;

node4 = new TreeNode(4);
node2.left = node4;

node5 = new TreeNode(5);
node2.right = node5;

console.log(sumNumbers(rootNode));
