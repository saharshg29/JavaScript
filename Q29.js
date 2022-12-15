// FIBONACCI SEQUENCE WITHOUT RECURSION

function fibonacci(n) {
  let first = 1;
  let second = 1;
  let third = 0;
  let count = 2;
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    third = first + second;
    first = second;
    second = third;
    count++;
    if (count === n) {
      return third;
    } else {
        console.log("Recursive call");
      fibonacci(count);
    }

    console.log("loop being called", n);
  }
}

console.log(fibonacci(8));
