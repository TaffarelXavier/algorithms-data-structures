// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.overallStack = [];
    this.minStack = [];
  }
}

MinStack.prototype.push = function(x) {
  if (x <= this.minStack[this.minStack.length - 1] || this.minStack.length === 0) {
    this.minStack.push(x);
  }
  this.overallStack.push(x);
};

MinStack.prototype.pop = function() {
  if (this.overallStack.pop() === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

MinStack.prototype.top = function() {
  return this.overallStack[this.overallStack.length - 1];
};

MinStack.prototype.getMin = function() {
  const min = this.minStack.length === 0 ? 0 : this.minStack[this.minStack.length - 1]
  return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
