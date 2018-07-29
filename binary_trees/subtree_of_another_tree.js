// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.
//
// Example 1:
// Given tree s:
//
//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.
// Example 2:
// Given tree s:
//
//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.

function isSubtree(s, t) {
  // traverse tree s until encountering a node with same val as t.val
  // if we make it through the entirety of s without finding a node with t.val, return false
  // if we find t.val, check rest of the structure;
  if (!s && !t) {
    return true;
  }

  if (!s || !t) {
    return false;
  }

  if (s.val === t.val && isSameTree(s, t)) {
    return true;
  }

  return isSubtree(s.left, t) || isSubtree(s.right, t);
}

function isSameTree(node1, node2) {
  if (!node1 && !node2) {
    return true;
  }

  if (!node1 || !node2) {
    return false;
  }

  return node1.val === node2.val &&
         isSameTree(node1.left, node2.left) &&
         isSameTree(node1.right, node2.right)
}
