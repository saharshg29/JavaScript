// 706. Design HashMap

// Design a HashMap without using any built-in hash table libraries.

// Implement the MyHashMap class:

// MyHashMap() initializes the object with an empty map.
// void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
// int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

var MyHashMap = function () {
  this.map = {};
};

MyHashMap.prototype.put = function (key, value) {
  this.map[key] = value;
};

MyHashMap.prototype.get = function (key) {
  return Object.values(this.map)[Object.keys(this.map).indexOf(key)];
};

MyHashMap.prototype.remove = function (key) {
  this.map.splice(this.map.indexOf(key), 1);
};

let map = new MyHashMap();
map.put(1, 1);
map.put(2, 2);
console.log(map.get(1));
console.log(map.get(2));
map.put(2, 1);
console.log(map.get(2));
console.log(map);
