//Linear Search Algorithm uses linear approach that is we will check each element one by one from begining
// if match found then return true else return false

//ALGORITHM

// STEP 1: INITIATE LOOP
// STEP 2: CHECK EACH ELEMENT ONE BY ONE AND IF ELEMENT FOUND THEN RETURN TRUE ELSE RETURN FALSE
// STEP 3: END

// ARRAY: [1,2,3,4,5] KEY: 3

function linearSearch(array, key) {
  let found = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == key) {
      found = true;
      break;
    }
  }
  return found;
}

let array = [1,2,3,4,5]
let key = 6;
console.log(linearSearch(array, key));

// Time complexity of linear search algorithm is n
// O(n) = n