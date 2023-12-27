// 148. Sort List

// Given the head of a linked list, return the list after sorting it in ascending order.

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

var sortList = function(head) {
    let answer = []
    let start = head;
    while (head) {
        answer.push(head.val)
        head = head.next
    }
    answer.sort((a,b) => {
        return a-b
    })

    return arrToList(answer)
};

let head = arrToList([4,2,1,3])

sortList(head)