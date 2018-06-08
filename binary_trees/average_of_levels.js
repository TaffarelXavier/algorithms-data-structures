// Given a non-empty binary tree, return the average value of the
// nodes on each level in the form of an array.

// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
// Note:
// The range of node's value is in the range of 32-bit signed integer.

function averageOfLevels(node) {
  if (!node) return null;
  let results = [];

  getNodesAndLevels(node, results, 0);

  return results.map(level => {
    return level.reduce((a, b) => a + b) / level.length;
  })
}

function getNodesAndLevels(node, results, level) {
  if (!node) return;

  getNodesAndLevels(node.left, results, level + 1);
  getNodesAndLevels(node.right, results, level + 1);

  results[level] = results[level] || [];
  results[level].push(node.val);
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

console.log(averageOfLevels(rootNode));
