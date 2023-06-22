// JS function to check if the given string is palindrome or not

let palindrome = (i, str) => {
    if (i >= str.length/2) {
        return true
    }
   
    if (str[i] !== str[str.length- i - 1]) {
        return false
    }
// console.log(i);
    
    return palindrome(i+1, str)
}

// let str = "hellolleh"

console.log(palindrome(0, "madam"));