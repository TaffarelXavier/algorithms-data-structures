// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
//
// Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.

var deleteNode = function(node) {
  let prev = null;
  let current = node;
  let next = current.next;

  while (next) {
    current.val = next.val;

    prev = current;
    current = next;
    next = next.next;
  }
  // detach the last node
  prev.next = null;
  // no return; we modified LL in place
};

// O(N) time
// O(1) space

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

let node3 = new ListNode(nodes[2]);
node2.next = node3;

let node4 = new ListNode(nodes[3]);
node3.next = node4;

let node5 = new ListNode(nodes[4]);
node4.next = node5;

let node6 = new ListNode(nodes[5]);
node5.next = node6;

let node7 = new ListNode(nodes[6]);
node6.next = node7;

deleteNode(node4);
walkList(node1);
