// 203. Remove Linked List Elements

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrToList(arr) {
    // console.log(arr.length);
  if (arr.length === 0) {
    return null
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

var removeElements = function (head, val) {
  let arr = [];
  let req;
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  req = arr.filter((i) => {
    if (i !== val) {
      return i;
    }
  });

  return arrToList(req);
};

let head = arrToList([7,7,7,7]);
let val = 7;

let answer = removeElements(head, val);

console.log(answer);

// while (answer) {
//   console.log(answer.val);
//   answer = answer.next;
// }


// console.log(arrToList([]));