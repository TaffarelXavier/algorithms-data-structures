// inary Search Tree, is a node-based binary tree data structure which has the following properties:
//
// The left subtree of a node contains only nodes with keys lesser than the node’s key.
// The right subtree of a node contains only nodes with keys greater than the node’s key.
// The left and right subtree each must also be a binary search tree.
// There must be no duplicate nodes.

function insert(node, nodeToInsert) {
  if (!node) return nodeToInsert;
  if (nodeToInsert.val > node.val) {
    if (!node.right) {
      node.right = nodeToInsert;
      return;
    } else {
      insert(node.right, nodeToInsert);
    }
  }

  if (nodeToInsert.val < node.val) {
    if (!node.left) {
      node.left = nodeToInsert;
      return;
    } else {
      insert(node.left, nodeToInsert);
    }
  }

  return node;
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function walkTree(node) {
  if (!node) return;
  console.log(node.val);
  walkTree(node.left);
  walkTree(node.right);
}

const vals = [5, 3, 7, 1, 4, 6];
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
// const node7 = new TreeNode(vals[6]);

node3.left = node6;
// node3.right = node7;

const node8 = new TreeNode(10);
insert(node1, node8);
console.log(node3)
