// 143. Reorder List

// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrToList(arr) {
  if (arr.length === 0) {
    return null;
  }
  let head = new ListNode();

  head.val = arr[0];
  let top = head;
  for (let i = 1; i < arr.length; i++) {
    head.next = new ListNode(arr[i]);
    head = head.next;
  }

  return top;
}

var reorderList = function (head) {
  let top = head;
  let arr = [];
  while (top) {
    arr.push(top.val);
    top = top.next;
  }

  let first = [];
  let second = [];
  let final = [];

  let mid = Math.round(arr.length / 2);

  first = arr.slice(0, mid);
  second = arr.slice(mid);
  second.reverse();

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      final.push(first.shift());
    } else {
      final.push(second.shift());
    }
  }
  head = arrToList(final);
  return head;
};

let head = arrToList([1,2,3,4,5])

let answer = reorderList(head)

while (answer) {
    console.log(answer.val)
    answer = answer.next
}