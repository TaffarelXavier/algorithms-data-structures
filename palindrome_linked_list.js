// Given a singly linked list, determine if it is a palindrome.
//
// Example 1:
//
// Input: 1->2
// Output: false
// Example 2:
//
// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

var isPalindrome = function(head) {
  if (!head || !head.next) { return true }
  let prev = null;
  let slow = head;
  let next = slow.next;
  let fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = next;
    next = next.next;

    fast = fast.next.next;
    slow.next = prev;
  }

  let pointer1;
  let pointer2;

  if (!fast) {
    // even
    console.log('even');
    slow.next = next;
    pointer2 = slow;
  } else {
    // odd
    console.log('odd');
    pointer2 = next;
  }
  pointer1 = prev;

  return listsAreEqual(pointer1, pointer2);
};

function listsAreEqual(l1, l2) {
  while (l1 && l2) {
    // console.log(l1.val, l2.val);
    if (l1.val !== l2.val) { return false }
    l1 = l1.next;
    l2 = l2.next;
  }
  return true;
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let nodes = [1, 2, 3, 4, 3, 2, 1];
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

// let node8 = new ListNode(nodes[7]);
// node7.next = node8;

console.log(isPalindrome(node1));
