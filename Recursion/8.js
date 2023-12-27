// Sum of N natural number using recursion

function SumOfN(n, sum) {
    if (n === 0) {
        console.log(sum)
        return 
    }

    // sum+=n
    // n = n-1
    SumOfN(n-1, sum+=n)
}

// console.log(SumOfN(10));

SumOfN(10, 0)