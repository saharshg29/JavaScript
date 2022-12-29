// 203. Remove Linked List Elements

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

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

var removeElements = function (head, val) {
  let top = head;
  if (head === null) {
    return null;
  }
  while (head.next !== null) {
    if (head.val === val) {
    head = head.next
  }
  
  if(head.next.val === val ) {
head.next = head.next.next
  }
  }

  
  return top
};

let head = arrToList([1, 2, 6, 3, 4, 5, 6]);
let val = 6;

let top = removeElements(head, val);

console.log(top);
while (top) {
  console.log(top.va);
  top = top.next;
}
