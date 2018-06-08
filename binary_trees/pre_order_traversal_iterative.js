// Given a binary tree, return the preorder traversal of its nodes' values.
//
// Example:
//
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
//
// Output: [1,2,3]

// while left node exists, go down it while adding its right node to a stack
// once no more left nodes, pop off nodes on t
function preorderTraversal(node) {
  let stack = [node];
  let values = [];

  while (stack.length > 0) {
    parseNode(stack.pop(), stack, values);
  }

  return values;
}

function parseNode(node, stack, values) {
  while (node) {
    values.push(node.val);
    if (node.right) stack.push(node.right);
    node = node.left;
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

//node6 = new TreeNode(6);
// node2.left = node5;
//node2.right = node6;

//tree.inorder();
//tree.preorder();
console.log(preorderTraversal(rootNode));
