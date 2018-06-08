// Reverse a singly linked list.
//
// Example:
//
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:
//
// A linked list can be reversed either iteratively or recursively. Could you implement both?

function reverseList(head) {
  if (!head) return null;
  let prev = null;
  let current = head;
  let next = head.next;
  return reverseListHelper(prev, current, next);
}

function reverseListHelper(prev, current, next) {
  if (!next) {
    current.next = prev;
    return current;
  }

  current.next = prev;
  prev = current;
  current = next;
  next = next.next;

  return reverseListHelper(prev, current, next);
}

// O(N) time O(N) space; call stack height of N

// Testing

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function walkList(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

let nodes = [1, 2, 3, 4, 5, 6, 7];
let node1 = new ListNode(nodes[0]);
let node2 = new ListNode(nodes[1]);
node1.next = node2;

let node6 = new ListNode(nodes[2]);
node2.next = node6;

let node3 = new ListNode(nodes[3]);
node6.next = node3;

let node4 = new ListNode(nodes[4]);
node3.next = node4;

let node5 = new ListNode(nodes[5]);
node4.next = node5;

let node7 = new ListNode(nodes[6]);
node5.next = node7;

reverseList(node1);
console.log(walkList(node7));
