// Pattern problem 3


let pattern = (n) => {
    if (n === 1) {
        console.log(1);
        return 
    }
    let arr = []
    for (let i = 1; i<=n;i++) {
        arr.push(i)
    }
    console.log(...arr);
    pattern(n-1)
    arr=[]
    for (let i = 1; i<=n;i++) {
        arr.push(i)
    }
    console.log(...arr);
}

console.log(pattern(10));