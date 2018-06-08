// Merge two sorted linked lists and return it as a new list.
// The new list should be made by splicing together the l1 of the
// first two lists.
//
// Example:
//
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(null);
  let current = dummy;

  let nextl1 = l1;
  let nextl2 = l2;

  while (nextl1 && nextl2) {
    if (nextl1.val <= nextl2.val) {
      current.next = nextl1;
      nextl1 = nextl1.next;
    } else {
      current.next = nextl2;
      nextl2 = nextl2.next;
    }
    current = current.next;
  }

  if (!nextl1) {
    current.next = nextl2;
  } else if (!nextl2) {
    current.next = nextl1;
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

let l1 = [1, 2, 4, 5, 7, 8, 10];

let l11 = new ListNode(l1[0]);
let l12 = new ListNode(l1[1]);
l11.next = l12;

let l13 = new ListNode(l1[2]);
l12.next = l13;

let l14 = new ListNode(l1[3]);
l13.next = l14;

let l15 = new ListNode(l1[4]);
l14.next = l15;

let l16 = new ListNode(l1[5]);
l15.next = l16;

let l17 = new ListNode(l1[6]);
l16.next = l17;

let l2 = [1, 1, 3, 3, 9];

let l21 = new ListNode(l2[0]);
let l22 = new ListNode(l2[1]);
l21.next = l22;

let l23 = new ListNode(l2[2]);
l22.next = l23;

let l24 = new ListNode(l2[3]);
l23.next = l24;

let l25 = new ListNode(l2[4]);
l24.next = l25;

// let l26 = new ListNode(l2[5]);
// l25.next = l26;
//
// let l27 = new ListNode(l2[6]);
// l26.next = l27;

// mergeTwoLists(l11, l21);
// console.log(walkList(l11));
