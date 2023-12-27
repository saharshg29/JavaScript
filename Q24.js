var isUgly = function (num) {
  function is_prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  const result = [];
  for (let i = 2; i <= num; i++) {
    while (is_prime(i) && num % i === 0) {
      if (!result.includes(i)) result.push(i);
      num /= i;
    }
  }

  if (
    (result.includes(2) && result.includes(3)) ||
    (result.includes(3) && result.includes(5)) ||
    (result.includes(2) && result.includes(5)) ||
    (result.includes(2) && result.includes(3) && result.includes(5)) ||
    (result.length == 0) || (result.length == 1 && (result.includes(2) || result.includes(3) || result.includes(5)))
  )
    return true;
  else return false;
};

console.log(isUgly(8));
