// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createList(arr) {
  let head = new ListNode();

  head.val = arr[0];
  let top = head;
  for (let i = 1; i < arr.length; i++) {
    head.next = new ListNode(arr[i]);
    head = head.next;
  }
  return top;
}

var addTwoNumbers = function (l1, l2) {
  let num1 = [];
  let num2 = [];
  while (l1) {
    num1.push(l1.val);
    l1 = l1.next;
  }
  console.log(num1);
  num1.reverse();
  while (l2) {
    num2.push(l2.val);
    l2 = l2.next;
  }
  console.log(num2);
  num2.reverse();
  num1 = parseInt(num1.join(""));
  console.log(num1);
  num2 = parseInt(num2.join(""));
  console.log(num2);
//   let answer = parseInt(num1) + parseInt(num2);
let answer = num1 + num2
  console.log(answer);
  answer = answer.toString().split("").reverse();
  let head = new ListNode();
  head.val = parseInt(answer[0]);
  let top = head;
  for (let i = 1; i < answer.length; i++) {
    head.next = new ListNode(parseInt(answer[i]));
    head = head.next;
  }

  return top;
};

let l1 = createList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
let l2 = createList([5,6,4])

// console.log(addTwoNumbers(l1, l2));

let answer = addTwoNumbers(l1, l2);

console.log(answer);
