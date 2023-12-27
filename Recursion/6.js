// Sum of first n numbers


// This one is parameterised approach
function sumOfN(i, sum) {
  if (i == 0) {
    console.log(sum);
    return;
  }
  console.log(sum);
  sumOfN(i - 1, sum + i);
}

sumOfN(10, 0);


// This one is functional way where the function will return the value instead of printing it

function nSum(n) {
    if (n==0) {
        return 0
    }
    return n+nSum(n-1)
}

console.log(nSum(10));