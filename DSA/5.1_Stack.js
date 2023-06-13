// Stack is a data structure that follows Last In First Out(LIFO) principle

// There are various use cases of Stack data structure. For example
//  ---> used in Undo/Redo functionality
//  ---> It is used to manage function calls (Call Stack)

// Implementing Stack using Array

const myStack = []

// to add an element into stack call the push method or unshift method can also be used 

myStack.push("Hello")
myStack.push("World")

// to remove an element form stack call the pop method or shift method can also be called

myStack.pop()

console.log(myStack);

// using shift and unshift method is not a good prfactice as it will disturb the complete index
