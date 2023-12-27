// 2325. Decode the Message

var decodeMessage = function (key, message) {
  let map = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
    i: null,
    j: null,
    k: null,
    l: null,
    m: null,
    n: null,
    o: null,
    p: null,
    q: null,
    r: null,
    s: null,
    t: null,
    u: null,
    v: null,
    w: null,
    x: null,
    y: null,
    z: null,
  };

  let done = false;
  let stored = Object.entries(map);
  let count = 0;
  let iterator = 0;
  let mapper = 0;

  // console.log(stored)
  while (!done) {
    console.log(stored);
    if (stored[mapper][1] === null) {
      stored[mapper][0] === key[iterator];
      iterator++;
      mapper++;
    }
    if (stored[mapper][1] !== null) {
      continue;
    }

    if (stored[stored.length - 1][1] !== null) {
      done = true;
    }
    if (stored[iterator] === " ") {
      iterator++;
      continue;
    }
  }
};

let key = "eljuxhpwnyrdgtqkviszcfmabo",
  message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb";

console.log(decodeMessage(key, message));
