// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
//
// You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.
//
// Example 1:
// Input:
// 	Tree 1                     Tree 2
//           1                         2
//          / \                       / \
//         3   2                     1   3
//        /                           \   \
//       5                             4   7
// Output:
// Merged tree:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \
// 	 5   4   7
// Note: The merging process must start from the root nodes of both trees.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function mergeTrees(node1, node2) {
  if (!node1 && !node2) {
    return null;
  }

  if (!node1) {
    return node2;
  }

  if (!node2) {
    return node1;
  }

  let sumNode = new TreeNode(node1.val + node2.val);
  
  sumNode.left = mergeTrees(node1.left, node2.left);
  sumNode.right = mergeTrees(node1.right, node2.right);

  return sumNode;
}
