// SUM OF DIGITS OF A NUMBER

function sumOfDigits(n) {
    if (n<0) {
        n = n*-1
    }
    if (n/10 === 0 ){
        return 0
    }


    
    return n%10+sumOfDigits(Math.floor(n/10))
}

console.log(sumOfDigits(236));
