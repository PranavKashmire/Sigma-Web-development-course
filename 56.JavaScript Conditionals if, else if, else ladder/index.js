console.log("hie conditional tutorials mkc")

let age = 4;
let grance = 12 ;

// if else in js :  
if(age >18){ 
    console.log("you can drive")
}
else{
    console.log("you cannot drive")
} 


// other operator include are + , - , / , * , %(modulus operator)
// ++ is increment operator
// -- is the decrement operator

//exponential operator ** use:
console.log(age**grance)


// increment asingment operator(+=) used as :
age +=grance
// the value of age will now change to age+grance value


// "=" is assingment operator
// "==" is the  equal to operator
// see other operators in the pdf

// when we compare like "3"==3 
// then the js will give the value as true because js only compares the value and not the type of varible
// to compare the value along with the type of the variable we use the === operator as :
// "3" === 3 now will return false 

// and is represented as &&
// or is represented as ||&

// for multiple comments in js :
/* i 
am 
mutli line comments
*/

// for mutiple else if statements
if (age !=18){
    console.log("you can drive");
}

else if(age==0){
    console.log("are you kidding");
}

else{
    console.log("you cannot drive");
}

// see ternary operator

// the code :
a=2 ;
b=5;

let c=a >b ? (a-b) :(b-a);
// this statement transforms to :
if(a>b){
    let c = a-b;
}
else{
    let c = a-b;
}