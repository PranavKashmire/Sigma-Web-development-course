// variables in js

// 1. console.log is used to display 
var a=4 ;
var b=5 ;
var c="pranav";
console.log(a+b)

// 2.to get what kind of the variable is we use the typeof operator

console.log(typeof a , typeof b)

// also variables cannot start with the variables
// for eg .  var 55a= "rohan";

// but they can start with underscore or other 
var _a= "shubham";

// also the variables are case senitive i.e. harry and Harry is different 

// when we use const with a varible then its value cannot be changed
// const a1= 5;
// a1= a1+4;  ---->this is not alllowed

// it is always recommended to use let on place of var for making varibles 
// because the let varibles have block scope not the global scope

let r =34 ;
let k=6 ;
let b3  = "pranav";
console.log(r+k);

// there are two types of datatypes in js : primitive and objects(or user defined data types)

// there are 6 primitive  data types

// boolean varible is :
const p =true ;

// the type of null is object for js. 


// object is the combination of the key value pairs:
let o= {
    name:"harry",
    // we can also put the keys in double quotes like ---"name" :"harry;"
    // but if the key name contains spaces then we need to put the key inside a double quote

    "job code": 5600 
}

console.log(o);
o.salary ="500cores";
console.log(o)
// now key value pair "salary" : '500acres' will be added