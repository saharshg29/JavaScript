// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

var numberOfSteps = function (num) {
    let count = 0;
    while (num !== 0) {
        if (num % 2 !== 0) {
        num--;
        count++;
        } else {
        num = num / 2;
        count++;
        }
    }
    return count;
};

let num = 123;
console.log(numberOfSteps(num));
