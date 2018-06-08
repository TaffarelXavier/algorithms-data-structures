// Invert a binary tree.
//
// Example:
//
// Input:
//
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:
//
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

var invertTree = function(node) {
  invertTreeHelper(node);
  return node;
};

function invertTreeHelper(node) {
  if (!node) return;

  [node.left, node.right] = [node.right, node.left];

  invertTreeHelper(node.left);
  invertTreeHelper(node.right);
}

// O(N) time, O(N) space (height of stack)

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const vals = [1, 2, 3, 4, 5, 6, 7];
const node1 = new TreeNode(vals[0]);
const node2 = new TreeNode(vals[1]);
const node3 = new TreeNode(vals[2]);

node1.left = node2;
node1.right = node3;

const node4 = new TreeNode(vals[3]);
const node5 = new TreeNode(vals[4]);

node2.left = node4;
node2.right = node5;

const node6 = new TreeNode(vals[5]);
const node7 = new TreeNode(vals[6]);

node4.left = node6;
node4.right = node7;

invertTree(node1);
console.log(node1);
