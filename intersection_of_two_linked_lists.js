// Write a program to find the node at which the intersection of two singly linked lists begins.
//
//
// For example, the following two linked lists:
//
// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗
// B:     b1 → b2 → b3
// begin to intersect at node c1.
//
//
// Notes:
//
// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.

var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  const aLength = getListLength(headA);
  const bLength = getListLength(headB);

  let longer = aLength >= bLength ? headA : headB;
  let shorter = aLength >= bLength ? headB : headA;

  let diff = Math.abs(aLength - bLength);
  for (diff; diff > 0; diff--) {
    longer = longer.next;
  }
  while ((longer !== shorter) && (longer.next)) {
    longer = longer.next;
    shorter = shorter.next;
  }
  return longer === shorter ? longer : null;
};

function getListLength(head) {
  if (!head) return 0
  let length = 0;

  while (head) {
    length++;
    head = head.next
  }
  return length;
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

let nodes = [1, 3, 5, 6, 7, 8, 9];
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

let node8 = new ListNode(2);
let node9 = new ListNode(4);
node8.next = node9;
node9.next = node4;
console.log(getIntersectionNode(node5, node8));
// walkList(node1);
