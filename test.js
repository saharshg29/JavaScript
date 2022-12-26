let parent = [
  [1, 2, 3],
  [3, 2, 1],
  [1, 1, 1],
];

let compare = (arr) => {
  let final = [];
  let matched;
  for (let i = 0; i < arr.length; i++) {
    let firstStr, secondStr;
    let first = [],
      second = [];
    first = arr[i];
    first = first.sort((a, b) => {
      return a - b;
    });
    for (let j = i + 1; j < arr.length; j++) {
      second = arr[j];
      second = second.sort((a, b) => {
        return a - b;
      });
      if (JSON.stringify(arr[i]) === JSON.stringify(arr[j])) {
        arr.splice(j);
      }
    }
    final.push(arr[i])
  }
  final = arr
  return final;
};

console.log(compare(parent));
