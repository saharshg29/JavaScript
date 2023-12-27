// var isSubsequence = function (s, t) {
//   let allPossibility = [];
//   function all(s, idx, arr, ans, empty = []) {
//     if (idx >= arr.length) {
//       if (empty.length === s.length) {
//         ans.push([...empty]);
//       }
//       return;
//     }
//     if (empty.length > s.length) return;
//     empty.push(arr[idx]);
//     all(s, idx + 1, arr, ans, empty); // -----------------> Take an element
//     empty.pop();
//     all(s, idx + 1, arr, ans, empty); // -----------------> Not take element
//   }
//   all(s, 0, t.split(""), allPossibility);

//   for (let i = 0; i < allPossibility.length; i++) {
//     allPossibility[i] = allPossibility[i].join("");
//   }
//   return allPossibility.includes(s);
// };

// let s = "rjufvjafbxnbgriwgokdgqdqewn";
// t =
//   "mjmqqjrmzkvhxlyruonekhhofpzzslupzojfuoztvzmmqvmlhgqxehojfowtrinbatjujaxekbcydldglkbxsqbbnrkhfdnpfbuaktupfftiljwpgglkjqunvithzlzpgikixqeuimmtbiskemplcvljqgvlzvnqxgedxqnznddkiujwhdefziydtquoudzxstpjjitmiimbjfgfjikkjycwgnpdxpeppsturjwkgnifinccvqzwlbmgpdaodzptyrjjkbqmgdrftfbwgimsmjpknuqtijrsnwvtytqqvookinzmkkkrkgwafohflvuedssukjgipgmypakhlckvizmqvycvbxhlljzejcaijqnfgobuhuiahtmxfzoplmmjfxtggwwxliplntkfuxjcnzcqsaagahbbneugiocexcfpszzomumfqpaiydssmihdoewahoswhlnpctjmkyufsvjlrflfiktndubnymenlmpyrhjxfdcq";

let s = "abc",
  t = "ahbgdc";
let allPossibility = [];
function all(s, idx, arr, ans, empty = []) {
  if (idx >= arr.length) {
    if (empty.length === s.length) {
      ans.push([...empty]);
    }
    return;
  }
//   if (empty.length > s.length) {
//     return;
//   }
  empty.push(arr[idx]);
  all(s, idx + 1, arr, ans, empty); // -----------------> Take an element
  empty.pop();
  all(s, idx + 1, arr, ans, empty); // -----------------> Not take element
}
all(s, 0, t.split(""), allPossibility);

console.log(allPossibility);
