// FIBONACCI SERIES

let fibonacci = (n) => {
    if (n == 0){
        return 0
    }
    else if (n == 1|| n == 2) {
        return 1
    }
    return n + fibonacci(n-1)
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));