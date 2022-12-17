// Logic taken from code sikho

// let string = "Hemant Kumar Gupta"
let string = [0,0,0,1,2,1]
let count = {}

for(let key of string) {
    count[key] = (count[key] || 0) + 1
}

console.log(count);