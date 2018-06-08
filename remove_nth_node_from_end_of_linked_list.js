// Given a linked list, remove the n-th node from the end of list and return its head.
//
// Example:
//
// Given linked list: 1->2->3->4->5, and n = 2.
//
// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
//
// Given n will always be valid.
//
// Follow up:
//
// Could you do this in one pass?

var removeNthFromEnd = function(head, n) {
  if (head === null) { return null }

  let dummy = new ListNode(null);
  dummy.next = head;
  let prev = dummy;
  let current = head;
  let next = current.next;

  while (nthFrom(current, n)) {
    prev = current;
    current = next;
    next = next.next;
  }

  prev.next = next;
  return dummy.next;
};

function nthFrom(node, n) {
  for (let i = 0; i < n; i++ ) {
    node = node.next;
    if (node === null) { return null }
  }
  return node;
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
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

walkList(removeNthFromEnd(node1, 4));
