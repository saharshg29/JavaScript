// 20. Valid Parentesis

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(string) {
  if (string.length < 2) {
    return false;
  }
  let open = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "(" || string[i] == "[" || string[i] == "{") {
      open.push(string[i]);
      continue;
    } else if (string[i] == ")" || string[i] == "]" || string[i] == "}") {
      if (string[i] == ")") {
        if (open[open.length - 1] == "(") {
          open.pop();
        } else {
          return false;
        }
      }
      if (string[i] == "]") {
        if (open[open.length - 1] == "[") {
          open.pop();
        } else {
          return false;
        }
      }
      if (string[i] == "}") {
        if (open[open.length - 1] == "{") {
          open.pop();
        } else {
          return false;
        }
      }
    }    
  }

  
  if(open.length !== 0) {
    return false
  }
  
  return true;
}
let string = "(())";

console.log(isValid(string));
