// 83. Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrToList(arr) {
  let head = new ListNode();

  head.val = arr[0];
  let top = head;
  for (let i = 1; i < arr.length; i++) {
    head.next = new ListNode(arr[i]);
    head = head.next;
  }
  return top;
}

var deleteDuplicates = function (head) {
  if (head === null) {
    return null;
  }
  let top = head;
  while (head.next !== null) {
    if (head.val === head.next.val) {
      head.next = head.next.next;
      deleteDuplicates(head)
      console.log("match");
    }
    if (head.next === null) {
      break;
    }
    head = head.next;
  }
  return top;
};

let head = arrToList([1,2,2,3]);
let answer = deleteDuplicates(head);
console.log(answer);
while (answer) {
  console.log(answer.val);
  answer = answer.next;
}
