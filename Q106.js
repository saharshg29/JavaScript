// 844 ---> Backspace String Compare
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

var backspaceCompare = function (s, t) {
    s = s.split("");
    t = t.split("");
    let sstack = []
    let tstack = []
    for (let i = 0 ; i<s.length; i++) {
      if(s[i] !== "#") {
          sstack.push(s[i])
      }else {
          sstack.pop()
      }
  
    }
    for (let i = 0; i<t.length; i++) {
      if(t[i] !== "#") {
          tstack.push(t[i])
      }else {
          tstack.pop()
      }
    }
  
    console.log(sstack,tstack);
    if (sstack.length === 0 && tstack.length === 0) {
      console.log(s, t);
      return true;
    } else {
      return sstack.join("") === tstack.join("");
    }
  };

let s = "ab#c", t = "ad#c"

console.log(backspaceCompare(s,t));