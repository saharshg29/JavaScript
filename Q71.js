// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

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

var mergeTwoLists = function (list1, list2) {
  let end = list1;
  if (list1 === null ) {
    list1 = list2
  }if (list2 === null) {
    list2 = list1
  }

  while (end) {
    console.log(end);
    if (end.next === null) {
      end.next = list2;
      break
    }
    end = end.next
  }
  let start = list1;
  let arr = []
  while(start) {
    arr.push(start.val)
    start = start.next
  }
  console.log(arr);
  arr = arr.sort((a,b) => {
    return a- b
  })
  console.log(arr);
  return arrToList(arr)
};

let list1 = arrToList([1,0,1,2]);
let list2 = arrToList([0]);

let head = mergeTwoLists(list1, list2);

while (head) {
  console.log(head.val);
  head = head.next;
}
