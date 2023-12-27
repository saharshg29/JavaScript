// 2496. Maximum Value of a String in an Array

// The value of an alphanumeric string can be defined as:

// The numeric representation of the string in base 10, if it comprises of digits only.
// The length of the string, otherwise.
// Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

var maximumValue = function (strs) {
  let ans = [];
  for (let i = 0; i < strs.length; i++) {
    if (Number(strs[i]) === 0) {
      ans.push(0);
    } else if (!Number(strs[i])) {
      console.log("if");
      ans.push(strs[i].length);
    } else {
      console.log("Else");
      console.log(strs[i]);
      ans.push(Number(strs[i]));
    }
  }
  console.log(ans);
  ans.sort((a, b) => {
    return a - b;
  });
  return ans[ans.length - 1];
};

let strs = ["1", "00"];

console.log(maximumValue(strs));

console.log(!Number("1"));
