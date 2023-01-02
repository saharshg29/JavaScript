// 24. Swap Nodes in Pairs
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

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

var swapPairs = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  if (arr.length === 1) {
    return arrToList(arr);
  }
  for (let i = 0; i < arr.length; i = i + 2) {
    if (arr[i + 1] === undefined) {
      break;
    }
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  console.log(arr);

  return arrToList(arr);
};

let head = arrToList([1,2,3]);

let answer = swapPairs(head);

while (answer) {
  console.log(answer.val);
  answer = answer.next;
}

console.log(arrToList([1]));
