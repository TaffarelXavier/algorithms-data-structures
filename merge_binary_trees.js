function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) {
    return null;
  }

  if (!t1) {
    return t2;
  }

  if (!t2) {
    return t1;
  }

  const newNode = new TreeNode(t1.val + t2.val);
  newNode.left = mergeTrees(t1.left, t2.left);
  newNode.right = mergeTrees(t1.right, t2.right);
  return newNode;
};
