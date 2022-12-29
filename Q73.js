// 2095. Delete the Middle Node of a Linked List

// You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

// The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

// For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrToList(arr) {
  // console.log(arr.length);
  if (arr.length === 0) {
    return null;
  }
  let head = new ListNode();

  head.val = arr[0];
  let top = head;
  //   console.log(top);
  for (let i = 1; i < arr.length; i++) {
    head.next = new ListNode(arr[i]);
    head = head.next;
  }

  return top;
}

var deleteMiddle = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  let mid = Math.round((arr.length - 1) / 2);
  console.log(mid);
  arr.splice(mid, 1);
  return arrToList(arr);
};

let head = arrToList([2,1]);

let answer = deleteMiddle(head);

while (answer) {
  console.log(answer.val);
  answer = answer.next;
}
