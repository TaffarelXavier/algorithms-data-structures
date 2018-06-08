// Given a binary tree, flatten it to a linked list in-place.
//
// For example, given the following tree:
//
//    1
//   / \
//  2   5
// / \  \
//3  4   6
// The flattened tree should look like:
//
// 1
//  \
//   2
//    \
  //   3
  //    \
  //     4
  //      \
  //       5
  //        \
  //         6


var flatten = function(node) {
  flattenHelper(node);
};

function flattenHelper(node) { // returns the flattened root node
  if (!node) return null;

  let leftNode = node.left;
  let rightNode = node.right;

  let leftResult = flattenHelper(leftNode);
  let rightResult = flattenHelper(rightNode);

  combine(node, leftResult, rightResult);

  return node;
}

function combine(node, left, right) {
  if (left) {
    let tail = left;
    while (tail.right) {
      tail = tail.right;
    }
    node.left = null;
    node.right = left;
    tail.right = right;
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

flatten(rootNode);
console.log(rootNode);
