// Given a sorted linked list, delete all duplicates such that each element appear only once.
//
// Example 1:
//
// Input: 1->1->2
// Output: 1->2
// Example 2:
//
// Input: 1->1->2->3->3
// Output: 1->2->3


// Reader Writer method:
// Writer stays at its current position until Reader encounters
// a new (greater because LL is sorted) value
var deleteDuplicates = function(head) {
  if (!head) { return null }
  let writer = head;
  let reader = head.next;

  while (reader) {
    if (reader.val !== writer.val) {
      writer = writer.next;
      writer.val = reader.val;
    }
    reader = reader.next;
  }

  writer.next = null;
  return head;
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

let nodes = [1, 1, 2, 3, 3, 5, 6];
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

walkList(deleteDuplicates(node1));
