// Reverse a linked list from position m to n. Do it in one-pass.
//
// Note: 1 ≤ m ≤ n ≤ length of list.
//
// Example:
//
// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL

var reverseBetween = function(head, m, n) {
  if (m === n) {return head}
  let dummy = new ListNode(null);
  dummy.next = head;

  let currentPosition = 0;
  let current = dummy;
  let lowerDock; // position before m
  let mNode;     // node at m

  while (currentPosition < m) {
    if (currentPosition + 1 === m) {
      lowerDock = current;
      mNode = lowerDock.next;
    }
    current = current.next;
    currentPosition++;
  }

  let prev;
  let next = current.next;

  while (currentPosition < n) {
    prev = current;
    current = next;
    next = next.next;
    current.next = prev;
    currentPosition++;
  }

  mNode.next = next;
  lowerDock.next = current;
  return dummy.next;
};

// 1 passthrough -> O(N) time
// we reverse in place -> O(1) space

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
  return 'finished walking';
}

let l1 = [1, 2, 3, 4, 5];

let l11 = new ListNode(l1[0]);
let l12 = new ListNode(l1[1]);
l11.next = l12;

let l13 = new ListNode(l1[2]);
l12.next = l13;

let l14 = new ListNode(l1[3]);
l13.next = l14;

let l15 = new ListNode(l1[4]);
l14.next = l15;

// let l16 = new ListNode(l1[5]);
// l15.next = l16;
//
// let l17 = new ListNode(l1[6]);
// l16.next = l17;

console.log(walkList(reverseBetween(l11, 1, 5)));
// console.log(walkList(l11));
