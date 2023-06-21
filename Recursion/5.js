// To print linearly from n to 1 using backtracking

let recursion = (i, n) => {
    if (i > n) {
        return
    }
    recursion(i+1, n)
    console.log(i);
}


recursion(1,5)




// Let us see the code in action

// recursion(i= 1, n = 5) enter in call stack
    // base case did not matched
    // recursion(i = 1+1 = 2, n = 5) is called 

// recursion(i= 2, n = 5) enter in call stack
    // base case did not matched
    // recursion(i = 2+1 = 3, n = 5) is called 

// recursion(i= 3, n = 5) enter in call stack
    // base case did not matched
    // recursion(i = 3+1=4, n = 5) is called 

// recursion(i= 4, n = 5) enter in call stack
    // base case did not matched
    // recursion(i = 4+1=5, n = 5) is called

// recursion(i= 5, n = 5) enter in call stack
    // base case did not matched
    // recursion(i = 5+1=6, n = 5) is called 

// recursion(i= 6, n = 5) enter in call stack
    // base case is executed 
    // recursion(i = 6, n = 5) is returned

// pointer moves to recursion(i= 5, n = 5) and i = 5 is printed
    // recursion(i= 5, n = 5) got executed

// pointer moves to recursion(i=4, n = 5) and i = 4 is printed
    // recursion(i= 5, n = 5) got executed

// pointer moves to recursion(i= 3, n = 5) and i = 3 is printed
    // recursion(i= 3, n = 5) got executed

// pointer moves to recursion(i= 2, n = 5) and i = 2 is printed
    // recursion(i= 2, n = 5) got executed

// pointer moves to recursion(i= 1, n = 5) and i = 1 is printed
    // recursion(i= 1, n = 5) got executed


// FINAL OUTPUT IS 
    // 5
    // 4
    // 3
    // 2
    // 1