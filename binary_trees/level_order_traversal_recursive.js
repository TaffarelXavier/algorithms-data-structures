// Breadth First Traversal (level order traversal)

function levelOrderTraversal(node) {
  const treeHeight = height(node);
  for (let i = 0; i < treeHeight; i++) {
    printSpecificLevel(node, i);
  }
}

function printSpecificLevel(node, level) {
  if (!node) return null;
  if (level === 0) {
    console.log(node.val);
  } else if (level > 0) {
    printSpecificLevel(node.left, level - 1);
    printSpecificLevel(node.right, level - 1);
  }
}

function height(node) {
  if (!node) return 0;

  let leftHeight = height(node.left);
  let rightHeight = height(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
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

node3.left = node6;
node3.right = node7;

console.log(levelOrderTraversal(node1));
