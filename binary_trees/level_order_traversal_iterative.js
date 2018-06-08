// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

function levelOrder(node) {
  if (!node) return [];
  let queue = [[node, 0]];
  let values = [];

  while (queue.length > 0) {
    parseNode(queue.shift(), queue, values);
  }

  return values;
}

function parseNode(nodeAndLevel, queue, values) {
  let node = nodeAndLevel[0];
  let level = nodeAndLevel[1];

  values[level] = values[level] || [];

  values[level].push(node.val);
  if (node.left) {
    queue.push([node.left, level + 1]);
  }
  if (node.right) {
    queue.push([node.right, level + 1]);
  }
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

console.log(levelOrder(rootNode));
