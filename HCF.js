let a = 111;
let b = 213;

let rem=1;
let hcf = true;

while (hcf) {
  rem = b % a;
  b = a;
   if (rem == 0) {
    console.log(a);
    hcf = false;
  }a = rem;
 
}
