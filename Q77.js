// 1721. Swapping Nodes in a Linked List

// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

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

var swapNodes = function (head, k) {
    let arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    let sIndex = k -1
    let eIndex = arr.length-k
    let temp = arr[sIndex]
    arr[sIndex] = arr[eIndex]
    arr[eIndex] = temp
    console.log(arr);

    return arrToList(arr)
};

let head = arrToList([7,9,6,6,7,8,3,0,9,5]);

let k = 5

let top = swapNodes(head, k);

while (top) {
  console.log(top.val);
  top = top.next;
}
