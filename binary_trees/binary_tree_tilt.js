// Given a binary tree, return the tilt of the whole tree.
//
// The tilt of a tree node is defined as the absolute difference
// between the sum of all left subtree node values and the sum
// of all right subtree node values. Null node has tilt 0.
//
// The tilt of the whole tree is defined as the sum of all nodes' tilt.
//
// Example:
// Input:
//          1
//        /   \
//       2     3
// Output: 1
// Explanation:
// Tilt of node 2 : 0
// Tilt of node 3 : 0
// Tilt of node 1 : |2-3| = 1
// Tilt of binary tree : 0 + 0 + 1 = 1
// Note:
//
// The sum of node values in any subtree won't exceed the range of 32-bit integer.
// All the tilt values won't exceed the range of 32-bit integer.

/*
For null nodes: return 0

if one branch like this: 2
    1
  /
 2

or a good example case: 200
      1
    /  \
  1     1
  \    /
  100 100

|0 - 100| + |0 - 100| + |(1 + 100) - (1 + 100)| = 200

or a good example case: 11
      1
    /  \
  2     3
  \    /
  4   5

  |0 - 4| + |5 - 0| + |(2 + 4) - (3 + 5)| = 11
*/

function findTilt(node, acc = []) {
  if (!node) return 0;
  findTiltHelper(node, node, acc);
  return acc.reduce((sum, n) => sum + n);
};

function findTiltHelper(node, rootNode, acc) {
  if (!node) {
    return 0;
  }

  let leftTilt = findTiltHelper(node.left, rootNode, acc);
  let rightTilt = findTiltHelper(node.right, rootNode, acc);
  let result;

  result = Math.abs(leftTilt - rightTilt);

  acc.push(result);
  return leftTilt + rightTilt + node.val;
}

//      1
//    /  \
//   2    3
//  /     /
// 4     5

// [1,2,3,4,null,5]
// 2 expected: 11
