// let arr = [1,4,5,3,2, 6,19, 17, 11,15,13,12, 10, 7,9,8, 14, 17, 16]

// arr.sort((a, b) => {
// //    console.log(a,b);
//    console.log(arr.indexOf(a), arr.indexOf(b))
//    return a-b
// })

// console.log(arr);

var compress = function(chars) {
    let answer = []
    let stack = []
    for (let i = 0; i<chars.length; i++) {
        stack.push(chars[i])
        if (stack[stack.length-1] !== chars[i+1]) {
            answer.push(stack[0])
            answer.push(stack.length.toString())
            stack=[]
        }
    }
    chars = answer
    for (let i = 0; i<chars.length; i++) {
        chars[i] = answer[i]
    }
    console.log(chars)
    return chars.length
};

let chars = ["a","a","b","b","c","c","c"]

console.log(compress(chars));