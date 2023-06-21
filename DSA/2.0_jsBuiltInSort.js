// The sort() method in js does not work well certain time when we use it this is because of the fact that first the array data will be converted into ASCII unicode value and then sort() is called
console.log(["m", "y", "a", "b", "z", "c", "x"].sort());

console.log([2, 3, 410, 33, 12, 65].sort());

// using inbuilt sort function to print the values of an array in ascending order
// if a-b < 0 --> a comes before b;
// if a-b > 0 --> b comes before a;
// if a-b = 0 --> a and b are equal

// let demo = [4, 6, 15, 1.0, 5]
// let array = demo.sort((a, b) => {
//     console.log(a,b, '-->', demo);
//   return a - b;
// });

// console.log(array);
