// 739 --> Daily Temperatures

// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

var dailyTemperatures = function (temperatures) {
    let answer = [];
    let count = 0;
    for (let i = 0; i < temperatures.length; i++) {
        let current = i
        let max = i
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                max = j
                break
            }
        }
        answer.push(max-current)
        
    }
    // if (temperatures[temperatures.length - 2] > temperatures[temperatures.length-1]) {
    //     answer[answer.length - 2] = 0
    // }
    return answer

}

let temperatures = [55,38,53,81,61,93,97,32,43,78]

console.log(dailyTemperatures(temperatures));