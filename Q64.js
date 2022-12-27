// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var reverseList = function(head){
  
    var tmp = null;
    var newHead = null;
    while(head !== null){
      tmp = head;
      head = head.next;
      tmp.next = newHead;
      newHead = tmp;
    }
    
    return newHead;
  }

let head = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3))));
// console.log(head);
console.log(reverseList(head))