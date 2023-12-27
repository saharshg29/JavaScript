// To print linearly from n to 1

let recursion = (i, n) => {
    if ( n === i-1) {
        return
    }
    console.log(n);
    recursion(i, n-1)
}

recursion(1,5)


// CODE IN ACTION

// recursion(1,5) is called ---->
    // if condition is not satisfied
    // n = 5 is printed
    // recursion(1,5-1 = 4) is called

// recursion(i = 1,n = 4) is called ---->
    // if condition is not satisfied
    // n = 4 is printed
    // recursion(1,4-1 = 3) is called

// recursion(i = 1,n = 3) is called ---->
    // if condition is not satisfied
    // n = 3 is printed
    // recursion(1,5-1 = 2) is called

// recursion(i = 1,n = 2) is called ---->
    // if condition is not satisfied
    // n = 2 is printed
    // recursion(1,2-1 = 1) is called

// recursion(i =1, n = 1) is called ---->
    // if condition is not satisfied
    // n = 1 is printed
    // recursion(1,1-1 = 0) is called

// recursion(i = 1, n = 0) is called ---->
    // if condition is satisfies
    // recursion(1,0) is returned
    // recursion(1,1) is returned
    // recursion(1,2) is returned
    // recursion(1,3) is returned
    // recursion(1,4) is returned
    // recursion(1,5) is returned

