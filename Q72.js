// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

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

var removeNthFromEnd = function (head, n) {
    let start = head
    let arr = []
    while (start) {
        arr.push(start.val) 
        start = start.next
    }
    arr.splice(arr.length-n, 1)
    return arrToList(arr)
};


let head = arrToList([1,2,3,4,5])
let n = 2

let answer = removeNthFromEnd(head, 2)

while (answer) {
    console.log(answer.val)
    answer = answer.next
}