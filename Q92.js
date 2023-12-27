// 1019. Next Greater Node In Linked List

// You are given the head of a linked list with n nodes.

// For each node in the list, find the value of the next greater node. That is, for each node, find the value of the first node that is next to it and has a strictly larger value than it.

// Return an integer array answer where answer[i] is the value of the next greater node of the ith node (1-indexed). If the ith node does not have a next greater node, set answer[i] = 0.

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

var nextLargerNodes = function (head) {
    let arr = []
    let answer = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    for (let i = 0; i< arr.length; i++) {
        let j = i+1
        for (j; j<arr.length; j++) {
            if (arr[j] > arr[i]) {
                answer.push(arr[j])
                break
            }
        }
        if (j === arr.length) {
            answer.push(0)
        }
        
    }
    return answer
};

let  head = arrToList([2,7,4,3,5])

nextLargerNodes(head)
