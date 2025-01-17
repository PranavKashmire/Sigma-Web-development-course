// there are 2 ways of creating modules in javascript :1.CommonJs 
//                                                     2.EcmaScript Module

// moudles are basically the code written by others which we use .
// using the npm init in the terminal is used to 


// making a basic server:
// pasted from the node.js site
const http = require('node:http');                              
const hostname = '127.0.0.1';                                                       
const port = 3000                                               
const server = http.createServer((req, res) => {                
  res.statusCode = 200;1                                            
  res.setHeader('Content-Type', 'text/plain');                  
  res.end('Hello World\n');                                     
});                                                       
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// we have installed the nodemon module from the terminal(command -->  npm install --global nodemon)
// whenever we make changes in the server.js file , then server need to to restarted every time .
// using this module the system automatically restarts the server on its own.

// if we want to use different modules of node js in our website then we can use the nvm(node version manager) package .
// it make it easier for us to work on different modules of node js .
// but this is not required for basic developent .



// to import a module we use the require keyword:(this is called the commonJs where we imort using the require keyword)

// eg. const http = require('node:http');
// eg. const fs= require("fs");
// this is an https module
// but we will use the modern way of importing the module:(using the import keyword)
// i.e.   import http from "http"



// Es means EcmaScript :
// to import the module from the file mymodule.js we can use the syntax
// import {a} from "./mymodules.js"
// here a can module or any function from a file (lets say the  mymodule.js)

// to import more than one :
// import {a,b} from './mymodules.js'

// to import form the mymodules.js file directly we use :
export default obj;


// to import using the const keyword fro file mymodules2.js
const a=require("./mymodules2.js")

const a = require("./mymodules2.js")


// console.log(a,__dirname, __filename)
// in last 2 min of the video(can be asked in the interview) watch it 