"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readline() {
  return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write your logic in main();

function main() {
  const x = readline();
  var num = readline()
    .split(" ")
    .map((x) => parseInt(x));
  let k = true;
  while (k) {
    if (num[0] > num[1]) {
      num[0] += num[1];
      num.splice(1, 1);
      if (num.length == 1 || num[0] < num[1]) {
        k = false;
      }
    }
  }
  for (let i = 0; i<num.length)
  console.log(num);
}
