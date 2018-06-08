// Given a linked list, rotate the list to the right by k places, where k is non-negative.
//
// Example 1:
//
// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL
// Example 2:
//
// Input: 0->1->2->NULL, k = 4
// Output: 2->0->1->NULL
// Explanation:
// rotate 1 steps to the right: 2->0->1->NULL
// rotate 2 steps to the right: 1->2->0->NULL
// rotate 3 steps to the right: 0->1->2->NULL
// rotate 4 steps to the right: 2->0->1->NULL

 // head tail
 // on each iteration tail becomes new head
 // k % length ==> new k

function rotateRight(head, k) {
  if (!head) return null;
  let current = head;
  let prev;
  let tail;
  let length = 0;

  while (current) {
    length++;
    prev = current;
    current = current.next;
  }

  tail = prev;
  k = k % length;
  if (k === 0) return head;  // early return because no rotation
  let counter = length - k;
  current = head;            // resets current back to head

  for (let i = 1; i < counter; i++) {
    current = current.next;
  }

  let newHead = current.next;
  tail.next = head;
  current.next = null;

  return newHead;
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
//
// let l16 = new ListNode(l1[5]);
// l15.next = l16;
//
// let l17 = new ListNode(l1[6]);
// l16.next = l17;

console.log(rotateRight(l11, 3))
