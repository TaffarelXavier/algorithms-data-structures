// Remove all elements from a linked list of integers that have value val.

// Example:
//
// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

function removeElements(head, target) {
  if (!head) return null;
  const dummy = new ListNode(null);
  
  dummy.next = head;
  let anchor = dummy;
  let runner = head;

  while (runner) {
    if (runner.val !== target) {
      anchor.next = runner;
      anchor = runner;
    }
    runner = runner.next;
  }
  anchor.next = null;
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

let nodes = [1, 2, 6, 3, 4, 5, 6];
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

walkList(removeElements(node1, 6));
