// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(null);
  let current = dummy;
  let carry = 0;
  let currentSum;

  while (l1 && l2) {
    currentSum = l1.val + l2.val + carry;
    if (currentSum > 9) {
      current.next = new ListNode(0);
      carry = 1;
    } else {
      current.next = new ListNode(currentSum);
      carry = 0;
    }
    current = current.next;
  }

  // if (l1) {
  //   // sum list + l1
  // } else {
  //   // sum list + l2
  // }
  //
  return dummy.next
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let nodes1 = [1, 2, 6]
let nodes2 = [3, 8, 5, 6];

// list1
let node11 = new ListNode(nodes1[0]);
let node12 = new ListNode(nodes1[1]);
node11.next = node12;

let node13 = new ListNode(nodes1[2]);
node12.next = node13;

// list2
let node21 = new ListNode(nodes2[0]);
let node22 = new ListNode(nodes2[1]);
node21.next = node22;

let node23 = new ListNode(nodes2[2]);
node22.next = node23;

let node24 = new ListNode(nodes2[3]);
node23.next = node24;

console.log(addTwoNumbers(nodes1, nodes2));
