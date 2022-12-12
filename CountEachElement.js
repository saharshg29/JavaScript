// Logic taken from code sikho

let string = "Hemant Kumar Gupta"

let count = {}

for(let key of string) {
    count[key] = (count[key] || 0) + 1
}

console.log(count);