let data = [2,4,1]
var maxProfit = function (prices) {
    let copy = prices;
    let min = Math.min(...prices);
    let max = Math.max(...prices);
    let minPos = prices.indexOf(min);
    let maxPos = prices.indexOf(max);

    for (let i = 0; i < prices.length; i++) {
        if (maxPos < minPos) {
            copy.splice(maxPos, 1)
            console.log(copy)
            min = Math.min(...prices)
            max = Math.max(...prices);
            minPos = prices.indexOf(min);
            maxPos = prices.indexOf(max);
        } else if (min === max) {
            return 0
        } else if (maxPos > minPos) {
            return max - min;
        }
        else {
            return 0
        }
    }
    return 0
    console.log(min)
    console.log(max)
};

const PROFIT = maxProfit(data)
console.log(PROFIT)