var addDigits = function(num) {
    num = num.toString()
    let digit = 0;
    while (num.length > 1) {
        for (let i = 0; i<num.length; i++) {
            digit+=Number(num[i])
        }
        num = digit
        digit = 0
        num = num.toString()
        // console.log(digit);
    }
    return Number(num)
};

let num = 38

console.log(addDigits(num));