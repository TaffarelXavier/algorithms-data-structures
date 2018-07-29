//
// Given a binary tree, you need to compute the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
// This path may or may not pass through the root.
//
// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \
//       4   5
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
//
// Note: The length of path between two nodes is represented by the number of edges between them.

function diameterOfBinaryTree(node) {
  if (!node) return 0;
  let maxLeftDepth = maxDepth(node.left);
  let maxRightDepth = maxDepth(node.right);
  let result = maxLeftDepth + maxRightDepth;

  return Math.max(result, diameterOfBinaryTree(node.left), diameterOfBinaryTree(node.right));
};

function maxDepth(node) {
  if (!node) {
    return 0;
  }

  return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1
}
