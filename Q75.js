// 61. Rotate List

// Given the head of a linked list, rotate the list to the right by k places.

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

var rotateRight = function (head, k) {
  let arr = [];
  let top = head;
  let answer;
  while (top) {
    arr.push(top.val);
    top = top.next;
  }
  let partition = arr.length;
  let rotation = k % arr.length;
  answer = [
    ...arr.splice(partition - rotation),
    ...arr.splice(0, partition - rotation),
  ];
  console.log(answer);
  return arrToList(answer);
};

let head = arrToList([0,1,2]);
let k = 4;

let answer = rotateRight(head, k);

while (answer) {
  console.log(answer.val);
  answer = answer.next;
}
