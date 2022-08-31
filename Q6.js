// PLUS ONE
const payload =
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
var plusOne = function (digits) {
    if (digits.length < 17) {
        let copy = []
        digits = digits.join("")
        digits = Number(digits)
        digits += 1;
        digits = digits.toString()
        for (let i = 0; i < digits.length; i++) {
            copy[i] = Number(digits[i])
        }
        digits = copy


        return digits;
    }
    else {
        let copy = []
        digits = digits.join("")
        for (let i = 0; i < digits.length; i++) {
            if (i < digits.length - 1) {
                copy.push(Number(digits[i]))
            } else {
                console.log(typeof digits[i])
                copy.push(Number(digits[i]) + 1)
            }

        }
        if (copy[copy.length - 1] == 10) {
            for (let j = copy.length - 1; j >= 0; j--) {
                if (copy[j] == 10) {
                    copy[j] = 0;
                    copy[j - 1] += 1

                }
            }
        }
        if (copy.filter(x => x === 0).length === copy.length) {
            copy.unshift(1);
        }
        digits = copy
        return digits[digits.length-1]

    }
}


console.log(plusOne(payload))