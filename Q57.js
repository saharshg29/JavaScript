// 2042. Check if Numbers Are Ascending in a Sentence

// A sentence is a list of tokens separated by a single space with no leading or trailing spaces. Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters.

// For example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: "2" and "4" are numbers and the other tokens such as "puppy" are words.
// Given a string s representing a sentence, you need to check if all the numbers in s are strictly increasing from left to right (i.e., other than the last number, each number is strictly smaller than the number on its right in s).

// Return true if so, or false otherwise.

var areNumbersAscending = function (s) {
  let nums = [];
  nums = s.match(/(\d+)/)
  console.log(s.replace(/[^0-9]/g, ''));
  console.log(s);
//   let another = nums;

//   for (let i = 0; i < s.length; i++) {
//     console.log({nums, i, another});
//     if (nums.includes(parseInt(s[i]))) {
//     //   return false;
//     } 
//     if (Number.isInteger(parseInt(s[i]))) {
//       nums.push(parseInt(s[i]));
//     }
//   }
//   console.log(nums);
//   let final= nums.sort((a, b) => {return b - a});
//   console.log({ nums, another });
// console.log(final); 
console.log(nums);
//   return nums === another;
};

let s = "1 box has 3 blue 2 red 6 green and 12 yellow marbles";
console.log();
areNumbersAscending(s)
