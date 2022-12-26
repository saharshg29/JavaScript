// 2042. Check if Numbers Are Ascending in a Sentence

// A sentence is a list of tokens separated by a single space with no leading or trailing spaces. Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters.

// For example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: "2" and "4" are numbers and the other tokens such as "puppy" are words.
// Given a string s representing a sentence, you need to check if all the numbers in s are strictly increasing from left to right (i.e., other than the last number, each number is strictly smaller than the number on its right in s).

// Return true if so, or false otherwise.

var areNumbersAscending = function (s) {
  let words = s.split(" ");
  let nums = [];
  let ordered = [];
  for (let i = 0; i < words.length; i++) {
    if (parseInt(words[i])) {
      nums.push(parseInt(words[i]));
      ordered.push(parseInt(words[i]));
    }
  }
  ordered = ordered.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return false;
    }
  }

  if (JSON.stringify(nums) == JSON.stringify(ordered)) {
    return true;
  } else {
    return false;
  }

};

let s = "hello world 5 x 5";
console.log(areNumbersAscending(s));
