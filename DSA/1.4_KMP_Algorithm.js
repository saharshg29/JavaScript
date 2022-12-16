// KMP algorithm is an efficient algorithm to check if a given string is substring of given main string
// Unlike Naive search algorithm where we keep checking each element by element here in KMP we will maintain one LPS table.

// LPS table stands for longest preffix suffix table.
// This LPS table is used for storing the position where the matching breaks with given main string.
// Thus LPS table avoids unwanted repetetion and checking
// The size of LPS table is equal to the size of substring

// string = abcabcabspl
// substring = abcabcs
function calculateLpsTable(substring) {
  let i = 1;
  let j = 0;
  let lps = new Array(substring.length).fill(0);
  while (i < substring.length) {
    if (substring[i] === substring[j]) {
      lps[i] = j + 1;
      i += 1;
      j += 1;
    } else {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i += 1;
      }
    }
  }
  return lps;
}
console.log(calculateLpsTable("harsh"))

function kmpAlgorithm(string, substring) {
  let stringLength = string.length;
  let substringLength = substring.length;
  let lps = calculateLpsTable(substring);
  let i = 0;
  let j = 0;
  while (i < stringLength) {
    if (string[i] === substring[j]) {
      i += 1;
      j += 1;
    } else {
	if (j!==0) {
		j = lps[j-1]
	}else {
		i +=1
	}
    }
    if ( j === substringLength) {
	return true
    }
  }
  return false
}

console.log(kmpAlgorithm("Saharsh", "hash"));
