let a = prompt("enter the 1st number")

let b = prompt("enter the 2nd number")

// let sum = a+b

// console.log("the sum is ",sum)
// here if we give the input as a=12 and b=12 it will return 1212 (i.e  it  will append the number at the last)
// this is because a and b are strings 

// we need to first convert those numbers into integers then adding becomes easier
// so:

// let sum= parseInt(a)+parseInt(b)
// console.log("the sum is :" , sum)

//if we gave a dont give a number to a and b then we and then apply parseInt then compiler will return NaN(not a number).
// but this will be not as in form of error :
// for console.log("the sum is :" , sum)

// the output will be as --> the sum is NaN


// now handling this error is done error handling :

if(isNAN(a) || isNaN(b)){
    throw SyntaxError("enter only the numbers")
}
let sum= parseInt(a) + parseInt(b)
console.log("the sum is ", sum)
// now this will throw an proper error (here we have made a custom error and thrown an error)




// try catch error:

try {
    console.log("the sum is ", sum*x)
    // here we have not defined the x 
} catch (error) {
    console.log("error aa gaya bhaii")
    //if an error is found then rather than givng a red alert for error "error aa gya bhaii" will be displayed as normal text in the console menu
}




// the finally clause : it will close all the files
try {
    console.log("the sum is ", sum*x)
} catch (error) {
    console.log("error aa gaya bhaii")
}

// the finally wala code is always executed
finally{
    console.log("files are being closed ad db connections is being closed")
}

// advantage of using the finally clause is in functions(where we need to use the return statements)
function main(){
    let x=1 ;
try{
    console.log("the sum is ", sum*x)
    return true

}catch (error){
    console.log("error aa gya bhaii")
    return false
}
}

// note that after the return statement is exected the code after return is not executed.
// so to execute the code after the return statement finally clause is used .
