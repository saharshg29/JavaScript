// 2390 ----> Removing stars from a string

// You are given a string s, which contains stars *.

// In one operation, you can:

// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.

// Note:

// The input will be generated such that the operation is always possible.
// It can be shown that the resulting string will always be unique.

var removeStars = function (s) {
  s = s.split("");
  while (s.includes("*")) {
    let idx = s.indexOf("*");
    // console.log(idx);
   

    for (let i = idx; i >= 0; i--) {
        s.splice(idx, 1);
      if (s[i] !== "*") {
        console.log(s);
        // delete s[i]
        // delete s[idx]
        s.splice(i, 1);
        break;
      }
    }
  }
  s = s.join("");
  return s;
};

let s = "leet**cod*e";

console.log(removeStars(s));

// console.log(s.indexOf("b"));
