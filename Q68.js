// 234. Palindrome Linked List

// Given the head of a singly linked list, return true if it is a
// palindrome
//  or false otherwise.

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


var isPalindrome = function(head) {
    let num = []
    let rev = []
    while (head) {
        num.push(head.val)
        rev.unshift(head.val)
        head = head.next
    }
    if (num.join("") === rev.join("")) {
        return true
    }else {
        return false
    }
    
};

let head = arrToList([1,2])
console.log(isPalindrome(head));