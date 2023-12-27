var minimumSum = function (num) {
  var dig = [];
  for (let i = 0; i < 4; i++) {
    dig.push(num % 10);
    num = Math.floor(num / 10);
    dig.sort()
  }
  let num1 = dig[0]*10 + dig[2];
  let num2 = dig[1]*10 + dig[3];
  return num1+num2;
};

console.log(minimumSum(2934));