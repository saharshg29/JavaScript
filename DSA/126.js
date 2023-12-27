var minCost = function (colors, neededTime) {
    let count = 0;
    let i = 0;

    while (i < colors.length - 1) {
        if (colors[i] === colors[i + 1]) {
            let same = [];
            let j = i;

            while (j < colors.length && colors[j] === colors[i]) {
                same.push(neededTime[j]);
                j++;
            }

            same.sort((a, b) => a - b);

            for (let k = 0; k < same.length - 1; k++) {
                count += same[k];
            }

            i = j - 1;
        }

        i++;
    }

    return count;
};



let colors = "cddcdcae", neededTime = [4, 8, 8, 4, 4, 5, 4, 2]
console.log(minCost(colors, neededTime));