a = 1;
b = 24;
lcm = false;

if (a < b) {
  for (let i = 2; i < a / 2; i++) {
    if (a % i == 0 && b % i == 0) {
      console.log(i);
      lcm = true;
      break;
    }
   
  }
  console.log(1)
}
