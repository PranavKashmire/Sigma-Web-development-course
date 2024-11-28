// javascript strings

console.log("this is a tutorial on strings")

let a = "pranav";
console.log(a[0])
// this will print the 1st character(0th index element) of the string a.

console.log(a[1])
console.log(a[3])
console.log(a[4])
console.log(a[5])

// to get the length of the string a we use :
console.log(a.length)

let myname = "arush"
let friend = "vijay"
console.log("his name is " + myname + " and his friend name is " + friend)

// to add variables in strings(like the f-strings in py)
// note the f strings in js are called the template literals in js
let school = "ggsps"
console.log('the school name is ${school}')


// escape sequence characters in js : 


// to make the string in uppercase:
console.log(school.toUpperCase())
// console.log(school.toLocaleUpperCase())
// is used to lower case


// to slice the string
let your_name= "Pranavkashmire"

console.log(your_name.slice(1,4))



// to replace 77 from pr
console.log(your_name.replace("ka" ,"77"))

//to concanate two strings
console.log(your_name.concat(myname," arush kashmire"))


// strings are immutable i.e. they cannot be changed

// but when we modify those strings a new string is created

// to get the index of some character we use
console.log(myname.indexOf("av"))
// if that character is not present in the string then -1 is returned