// 328. Odd Even Linked List

// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

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

var oddEvenList = function (head) {
  let answer = [];
  let odd = [];
  let even = [];
  while (head) {
    answer.push(head.val);
    head = head.next
  }
  for (let i = 0; i < answer.length; i++) {
    if (i % 2 === 0) {
      odd.push(answer[i]);
    } else {
      even.push(answer[i]);
    }
  }

  console.log([...odd, ...even]);
  return arrToList([...odd, ...even])
};

let head = arrToList([2,1,3,5,6,4,7]);

console.log(oddEvenList(head));
