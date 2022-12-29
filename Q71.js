// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

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


var mergeTwoLists = function(list1, list2) {
    let head = list1;
    while (list1) {
        if (list1.next === null) {
            list1.next = list2
        }
        console.log(list1);
        list1 = list1.next
    }
  return head
};

let list1 = arrToList([1,2,4])
let list2 = arrToList([1,3,4])

console.log(mergeTwoLists(list1, list2));