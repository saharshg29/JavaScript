// 92. Reverse Linked List II

// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

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

var reverseBetween = function (head, left, right) {
    let arr = []
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    let part = arr.slice(left-1, right).reverse()
    let leftArr = arr.slice(0, left-1)
    let rightArr = arr.slice(right)
    arr = [...leftArr, ...part, ...rightArr]
    return arrToList(arr)
};

let head = arrToList([1, 2, 3, 4, 5]),
  left = 2,
  right = 4;

  reverseBetween(head, left, right)