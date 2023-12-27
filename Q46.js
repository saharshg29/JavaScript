var reverse = function (x) {
  if (x >= 0) {
    x = x.toString();
    x = x.split("");
    x = x.reverse();
    x = x.join("");
  } else {
    x = x * -1;
    x = x.toString();
    x = x.split("");
    x = x.reverse();
    x.unshift("-");
    x = x.join("");
  }

  if(x > (2**31)-1 || x<-1*(2**31)) {
    return 0
  }

  return x;
};
let x = 1534236469
;
console.log(reverse(x));
