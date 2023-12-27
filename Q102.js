var setZeroes = function (matrix) {
  let row = [],
    col = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row.push(i);
        col.push(j);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (row.includes(i)) {
        matrix[i][j] = 0;
      }
      if (col.includes(j)) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
};

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

console.log(setZeroes(matrix));
