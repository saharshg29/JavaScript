// They are used to store key value pair
// They are like array but without any order
// Unlike arrays, hash table are fast for all of the following operations:
// -> Searching a value
// -> Adding a new value
// -> Removing an existing value

class HashTable {
  constructor(size = 55) {
    this.keyMap = new Array(size);
  }

  hash(string, arrayLength) {
    let total = 0;
    for (let i = 0; i < Math.min(string.length, 100); i++) {
      let char = string[i];
      total += char.charCodeAt();
    }
    return (total + 31) % this.keyMap.length;
    // In order to get more random value add a prime number before performing modulo operation
  }

  set(key, value) {
    const index = this.hash(key)
    if (!this.keyMap[index]) {
        this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }

  get(key) {
    const index = this.hash(key)
    if (this.keyMap[index]) {
        for (let item of this.keyMap[index]) {
            if (item[0] === key) {
                return item
            }
        }
    }
    return undefined
  }

  values() {
    let valueArray = []
    for (let item of this.keyMap) {
        if (item) {
            for (let data of item) {
                valueArray.push(data[1])
            }
        }
    }
    return valueArray
  }
  keys() {
    let keysArray = []
    for (let item of this.keyMap) {
        if (item) {
            for (let data of item) {
                keysArray.push(data[0])
            }
        }
    }
    return keysArray
  }
}

let table = new HashTable()

table.set("orange", "saharhs")
table.set("olive", "sarita")
table.set("orchid", "Hemant")
console.log(table.get("orchi"));
console.log(table.values())
console.log(table.keys())


// Time Complexity
// For Insertion Removal and accessing an element the time complexity is constant i.e. O(1)