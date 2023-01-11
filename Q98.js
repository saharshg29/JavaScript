// 2363. Merge Similar Items
// You are given two 2D integer arrays, items1 and items2, representing two sets of items. Each array items has the following properties:

// items[i] = [valuei, weighti] where valuei represents the value and weighti represents the weight of the ith item.
// The value of each item in items is unique.
// Return a 2D integer array ret where ret[i] = [valuei, weighti], with weighti being the sum of weights of all items with value valuei.

// Note: ret should be returned in ascending order by value.

var MyHashSet = function () {
    this.number = [];
  };
  
  MyHashSet.prototype.add = function (key) {
      if (this.number.includes(key)) {
          this.number[this.number.indexOf(key)] = key;
        }
  };
  
  MyHashSet.prototype.remove = function (key) {
    if (this.number.includes(key)) {
      this.number.splice(this.number.indexOf(key), 1);
    }
  };
  
  MyHashSet.prototype.contains = function (key) {
    return this.number.includes(key);
  };
  
  let func = new MyHashSet
  
  func.add(1)
  func.add(2)
  func.remove(1)
  func.remove(2)
  console.log(func.contains(2))