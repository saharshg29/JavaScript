// 739. Daily Temperatures

// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
var dailyTemperatures = function (temperatures) {
    let answer = [];
    let count = 0;
    for (let i = 0; i < temperatures.length-1; i++) {
      count = 0;
      for (let j = i + 1; j < temperatures.length; j++) {
        if (temperatures[i] < temperatures[j]) {
          count++;
          answer.push(count);
          break;
        }
        if (temperatures[i] >= temperatures[j]) {
          count++;
        }
      }
      if(count >= temperatures.length-i-1) {
          answer.push(0)
      }
      
    }
    answer.push(0)
    console.log(answer)
    if (answer.length === temperatures.length) {
        return answer;
    }
    else {
      answer.pop()
      return answer
    }
  };

// let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
let temperatures =[77,77,77,77,77,41,77,41,41,77]
console.log(dailyTemperatures(temperatures));
