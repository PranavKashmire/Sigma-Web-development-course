// the concept of promises is used to avoid the callback hell

import fs from "fs/promises"
// here we imported the fs module 

let a = await fs.readFile("harry.txt")
// this fucntion is used to read the file using the await function
 
let b= await fs.writeFile("harry.txt","this is an amazing \n promises")
// this is used to  write the file


