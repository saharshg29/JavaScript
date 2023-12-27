var maximumWealth = function(accounts) {
    var wealth = []
    let sum;
    for (let i = 0; i<accounts.length; i++) {
        sum = 0;
        for (let j = 0; j<accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        wealth.push(sum)
    }
    
    for (let i = 0; i<wealth.length; i++) {
        for (let j = 0; j<wealth.length; j++) {
            if (wealth[i] > wealth[j]) {
                [wealth[i], wealth[j]] = [wealth[j], wealth[i]]
            }
        }
    }

    return wealth[0];
};

let input = [[1,5],[7,3],[3,5]]

console.log(maximumWealth(input))