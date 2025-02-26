// now after creating the main.js if i write "npm init -y" the "package.json" will be already installed in the folder where the main.js is present


const fs=require("fs")

console.log(fs)

console.log("starting")
fs.writeFileSync('harry.txt' , "harry is a good boy")
// this is used to make a txt file named "harry.txt" which will contain the text "harry is a good boy"
console.log("ending")


// the same work can be done using the writefile function 
// and it is always prefered to use this function
fs.writeFile("harry2.txt" , "harry is not a good boy", ()=>{
    console.log("done")

    // to read the same file we use :
    fs.readFile("harry2.txt", (error , data)=>{
        console.log(error , data.toString())
    })

    // error keyword is used to detect weather some error is present or not
    // if there is no error then NULL will be returned. 
})
console.log("ending")


// search for callback hell  from browser and learn that short concept.


// to append some content in that file we use:
fs.appendFile("harry.txt" , "harryrobo", (e,d)=>{
    console.log(d)
})
console.log("ending")
// harryrobo will be appended in the file harry.txt


// to avoid the callback hell , we use the concept of promises(now see the mainpromised.js)