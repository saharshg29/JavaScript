let arr = ["a","1","b","12",undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]
console.log(arr);
for (let i = arr.length-1; arr[i] === undefined; i--){
    arr.pop()
}
console.log(arr);