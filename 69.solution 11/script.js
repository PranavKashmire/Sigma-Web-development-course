let a = 6;

function factorial(number) {
    let arr = Array.from(Array(number + 1).keys());
    // this function is shortcut for making an array
    console.log(arr.slice(1));
    let result = arr.slice(1).reduce((a, b) => {
        return a * b;
    }, 1);
    console.log(result);
}


function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))
