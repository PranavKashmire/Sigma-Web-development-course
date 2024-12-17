// asynchronous nature of JS :

// 1.
console.log("harry is a hacker")
// 2.
console.log("rohan is hecker")


// 3.
setTimeout(()=>{
    console.log("i am inside settimeout")
}, 2000);
// this means that print "i am inside settimeout" after 2 seconds

// 4.
console.log("the end")


// generally the execution of the code should be in priority 1 then 2 then 3 then 4 but in reality :
// asynchronous nature specifes that first 1 will execute , then 2 .
// but as for 3 (it has to be executed after 2 seconds , execution will move down and execute 4 , once 2 seconds are completed 3 will be executed) .
// this is the asynchorous nature


//note that we have used extensions  (es7 react from rodrigovallades and es7+react from dsznajder) to write arrow functions


// call back functions:
// const callback=(arg)=>{
    // console.log(arg)
// }

// const loadScript= (src, callback)=>{
// let sc= document.createElement("script");
// sc.src=src ;
// sc.onload = callback("harry")
// here harry is the argument
// document.head.append(sc)
// }

// search on google for prism cdn are get prism js code and copy the src link


// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" , callback)
// here we have given the callback function

// but these callback functions are very much complex to understand so we use the promise concept .