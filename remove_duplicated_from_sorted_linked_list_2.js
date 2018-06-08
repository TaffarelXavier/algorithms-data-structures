// Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

// Example 1:
//
// Input: 1->2->3->3->4->4->5
// Output: 1->2->5
// Example 2:
//
// Input: 1->1->1->2->3
// Output: 2->3

var deleteDuplicates = function(head) {
  // anchor runner with counter where anchor links to next element where counter === 1
  let dummy = new ListNode(null);
  let distinctNode = dummy;
  let runner = head;
  let counter;
  let prev;

  while (runner) {
    if (prev && runner.val === prev.val) {
      counter++
    } else {
      if (counter === 1) {
        distinctNode.next = prev;
        distinctNode = distinctNode.next;
        distinctNode.next = null; // must break links  to non-distinct nodes
      }
      counter = 1;
    }
    prev = runner;
    runner = runner.next
  }

  if (counter === 1) {
    distinctNode.next = prev;
    distinctNode = distinctNode.next;
    distinctNode.next = null;
  }

  return dummy.next;
};

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

let nodes = [1, 2, 3, 3, 4, 4, 5];
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
