// 412. Fizz Buzz

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

var fizzBuzz = function (n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      answer.push("FizzBuzz");
      continue;
    } 
    if (i % 3 === 0) {
      answer.push("Fizz");
      continue;
    }
    if (i % 5 === 0) {
      answer.push("Buzz");
      continue;
    }
    else {
      answer.push(i.toString());
      continue;
    }
  }
  return answer;
};

let n = 5;
console.log(fizzBuzz(n));
