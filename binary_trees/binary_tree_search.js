// Binary Trees

function searchTree(target, node) {
  if (!node || node.val === target) return node;

  if (target < node.val) {
    return searchTree(target, node.leftChild);
  } else if (target > node.val) {
    return searchTree(target, node.rightChild);
  }
}

class TreeNode {
  constructor(val, leftChild = null, rightChild = null) {
    this.val = val;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

const vals = [1, 2, 3, 4, 5];
const node1 = new TreeNode(vals[0]);
const node2 = new TreeNode(vals[1]);
const node3 = new TreeNode(vals[2]);

node1.leftChild = node2;
node1.rightChild = node3;

const node4 = new TreeNode(vals[3]);
const node5 = new TreeNode(vals[4]);

node2.leftChild = node4;
node2.rightChild = node5;

function walkTree(node) {
  console.log(node.val);
  if (node.leftChild) walkTree(node.leftChild);
  if (node.rightChild) walkTree(node.rightChild);
}

// walkTree(node1);
// console.log(searchTree(3, node1));
