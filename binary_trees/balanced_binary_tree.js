// Given a binary tree, determine if it is height-balanced.
//
// For this problem, a height-balanced binary tree is defined as:
//
// a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
//
// Example 1:
//
// Given the following tree [3,9,20,null,null,15,7]:
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Return true.
//
// Example 2:
//
// Given the following tree [1,2,2,3,3,null,null,4,4]:
//
//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// Return false.
//


function isBalanced(node) {
  if (!node) return true;
  let leftHeight = getHeight(node.left);
  let rightHeight = getHeight(node.right);

  return !(Math.abs(leftHeight - rightHeight) > 1) &&
         isBalanced(node.left) &&
         isBalanced(node.right)
}

// O(NlogN) time, O(N) space

function isBalanced(node) {
  if (!node) return 0;
}

// try to implement caching
function getHeight(node, cache = {}) {
  if (!node) return 0;

  let leftHeight = cache[node.left] || getHeight(node.left);
  let rightHeight = cache[node.right] || getHeight(node.right);
  let result = Math.max(leftHeight, rightHeight) + 1;

  cache[node] = result;

  return result;
}

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

console.log(isBalanced(node1));
