/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let record = []
    for (let i = 0; i<operations.length; i++) {
        if (!isNaN(parseInt(operations[i]))) {
            record.push(parseInt(operations[i]))
            // console.log("Hello World");
        } else if (operations[i] === "C") {
            record.pop()
            // console.log("Hello");
        }else if(operations[i] === "D") {
            // console.log("D")
            record.push(record[record.length-1] * 2)
        }
        else if(operations[i] === "+") {
            // console.log("D")
            record.push(record[record.length-1] + record[record.length-2])
        }
    }
    // console.log(record)

    let sum = record[0]
    for (let i = 1; i<record.length; i++) {
        sum = sum + record[i]
    }
    return sum
};

let operations = ["5","2","C","D","+"]

console.log(calPoints(operations));

// calPoints(operations)