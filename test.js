function sorted(arr){
    for (let i = 0; i< arr.length; i++) {
        for (let j = i+1; j<arr.length; j++) {
            if (arr[i][1] < arr[j][1]) {
                [arr[i], arr[j]] = [arr[j], arr[i]] 
            }
        }
    }
}

let arr = [ [ 't', 1 ], [ 'r', 1 ], [ 'e', 2 ] ]
sorted(arr);
console.log(arr)