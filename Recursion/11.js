// PATTER PRINTING 1

function pattter(n) {
    if (n <1) {
        return  "*"
    }

    pattter(n-1)
    var arr = []
    for (let i = 1; i<=n; i++) {
        arr.push(i)
    }
    if (arr.length > 0) {
        console.log(...arr);
    }
    
}


console.log(pattter(5));