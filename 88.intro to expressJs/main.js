// till now we have learn about the nodejs(node js has a package called https which is usef to create and start servers)
// now we are going to start express js
// it is an web framework from nodejs
// the uses of node js is limited(like we cannot serve a static file)
// hence we have made the expressjs 
// its is majorly used for making production level web applications

// to install the express we use the command (in the terminal)--> npm i express

// to specfically install a version we use command  :
// npm i express@4
// it will install the verison 4


// read the documentation of express module


// code to print hellow world(pasted from the expressjs documentation) :
const express = require('express')
const app = express()
const port = 3000


// app.get or app.post or app.put or app.delete(path , handler)
app.get('/', (req, res) => {
    // the '/' is the path 
    // (req, res) is the handler
  res.send('Hello World!')
//   here we give the content which we want to print 
})
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 


// in  node js we need to give description and create many endpoints , 
// this is made easy with express js

// here blog and slug are called the url parameters
// we can create different url variables
app.get('/blog/:slug/',(req ,res)=>{
  res.send('hello ${req.params.slog}')
})



// to hide all the files and source code of the website form others we use the express js as (using the static method):
app.use(express.static('public'))

// hence we dont use the http packages as it is difficult to hide the source code . express makes it easy .

// make a folder public and add all the source code in that, like harry.txt and main.js 
// now your source code is availabe to public
// but will not add as we dont want our code to be availabe to others