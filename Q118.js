var reverseWords = function (s) {
  let res = s.split(" ");
  for (let i = 0; i < res.length; i++) {
    res[i] = res[i].split("").reverse().join("");
  }
  return  res.join("")
};

let s = "Let's take LeetCode contest";

console.log(reverseWords(s));
