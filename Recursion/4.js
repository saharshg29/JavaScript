// To print linearly from 1 to n using backtracking

let recursion = (i, n) => {
    if (n === i-1) {
        return
    }
    recursion(i, n-1)
    console.log(n);
}

recursion(1,5)


// Let us see the code in action

// recursion(i= 1, n = 5) enter in call stack
    // base case did not matched
    // recursion(i = 1, n = 5-1 = 4) is called 

// recursion(i= 1, n = 4) enter in call stack
    // base case did not matched
    // recursion(i = 1, n = 4-1 = 3) is called 

// recursion(i= 1, n = 3) enter in call stack
    // base case did not matched
    // recursion(i = 1, n = 3-1 = 2) is called 

// recursion(i= 1, n = 2) enter in call stack
    // base case did not matched
    // recursion(i = 1, n = 2-1 = 1) is called

// recursion(i= 1, n = 1) enter in call stack
    // base case did not matched
    // recursion(i = 1, n = 1-1 = 0) is called 

// recursion(i= 1, n = 0) enter in call stack
    // base case is executed 
    // recursion(i = 1, n = 0) is returned

// pointer moves to recursion(i= 1, n = 1) and n = 1 is printed
    // recursion(i= 1, n = 1) got executed

// pointer moves to recursion(i= 1, n = 2) and n = 2 is printed
    // recursion(i= 1, n = 2) got executed

// pointer moves to recursion(i= 1, n = 3) and n = 3 is printed
    // recursion(i= 1, n = 3) got executed

// pointer moves to recursion(i= 1, n = 4) and n = 4 is printed
    // recursion(i= 1, n = 4) got executed

// pointer moves to recursion(i= 1, n = 5) and n = 5 is printed
    // recursion(i= 1, n = 5) got executed


// FINAL OUTPUT IS 
    // 1
    // 2
    // 3
    // 4
    // 5