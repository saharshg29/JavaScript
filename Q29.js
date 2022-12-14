function fibonacci(n) {
  let first = 1;
  let second = 1;
  let third = 0;
  let count = 2;
  if ((n === 0)) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    while (count !== n) {
      third = first + second;
      first = second;
      second = third;
      count++;
      console.log("loop being called", n)
    }
    return third;
  }
}

console.log(fibonacci(8))
