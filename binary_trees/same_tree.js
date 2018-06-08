// Given two binary trees, write a function to check if they are the same or not.
//
// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
//
// Example 1:
//
// Input:     1         1
//           / \       / \
//          2   3     2   3
//
//         [1,2,3],   [1,2,3]
//
// Output: true
// Example 2:
//
// Input:     1         1
//           /           \
//          2             2
//
//         [1,2],     [1,null,2]
//
// Output: false
// Example 3:
//
// Input:     1         1
//           / \       / \
//          2   1     1   2
//
//         [1,2,1],   [1,1,2]
//
// Output: false

var isSameTree = function(p, q) {
  if (!p && !q) {
    return true;
  } else if (!p || !q) {
    return false;
  }

  return isSameNode(p, q) &&
         isSameTree(p.left, q.left) &&
         isSameTree(p.right, q.right)
};

function isSameNode(node1, node2) {
  if (!node1 && !node2) {
    return true;
  } else if (!node1 || !node2) {
    return false;
  }
  return node1.val === node2.val;
}

// O(N) time, O(N) space
