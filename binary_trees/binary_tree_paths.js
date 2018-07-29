// Given a binary tree, return all root-to-leaf paths.
//
// Note: A leaf is a node with no children.
//
// Example:
//
// Input:
//
//    1
//  /   \
// 2     3
//  \
//   5
//
// Output: ["1->2->5", "1->3"]
//
// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

function binaryTreePaths(node) {
  if (!node) return [];
  return getLeafPaths(node);
};

function getLeafPaths(node, path = [], leafPaths = []) {
  path.push(node.val)

  if (!node.left && !node.right) {
    leafPaths.push(path.join('->'));
    path.pop();
    return leafPaths;
  }

  if (node.left) getLeafPaths(node.left, path, leafPaths);
  if (node.right) getLeafPaths(node.right, path, leafPaths);
  path.pop();

  return leafPaths;
}
