// QUEUE data structure follows FIFO principle. 
// FIFO means First In First Out
// Here operations will take place at both the ends, i.e. at beginning and also at the end

// USE CASES inncludes
// ---> Image uploads
// ---> Background tasks
// ---> Printing tasks

// Implementing queue using an ARRAY
const queue = []

queue.push("Hello")
queue.push("Guys")
queue.push("YOYO")

queue.shift()
console.log(queue)

queue.shift()
console.log(queue)

queue.shift()
console.log(queue)