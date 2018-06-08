 // Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.
//
// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
//
// Example 1:
//
// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL
// Example 2:
//
// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL
// Note:
//
// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ...


function oddEvenList(head) {
  // 2 pointer solution: each pointer moves 2 spaces
  // first pointer starts at head
  // second pointer starts at head.next
  // when both pointers' next value is null, join first pointer and second pointer
  if (!head) return null;
  let pointer1 = head; // odds
  let pointer2 = head.next; // evens
  let pointer2Anchor = head.next;

  while (pointer1.next && pointer2.next) {
    pointer1.next = pointer1.next.next;
    pointer2.next = pointer2.next.next;
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  pointer1.next = pointer2Anchor;

  return head;
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

let nodes = [1, 2, 3, 4, 5, 6, 7, 8];
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

let node8 = new ListNode(nodes[7]);
node7.next = node8;
walkList(oddEvenList(node1));
