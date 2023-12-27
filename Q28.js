var decodeMessage = function (key, message) {
    let finalMessage = []
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let count = {};
  for (let alpha in alphabet) {
    count[key[alpha]] = alphabet[alpha]
  }

  

  return count
};

let key = "eljuxhpwnyrdgtqkviszcfmabo"
let message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"

console.log(decodeMessage(key, message))