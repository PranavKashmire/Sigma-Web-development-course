// this code is pasted from the documentation of express js
const express = require('express')
const app = express()
const port = 3000

//   middleware modifies our request
// e.g. 
app.use(express.static("public"))
// if harry.txt is present in public folder then the request is set to response

// middleware is written as:
// app.use((req , res, next)=>{
// res.send('hello world')
// })

// middleware 1
app.use((req , res, next)=>{
    console.log('m1')
    // m1 is printed in the console
    next()
    // if next() is not given then request yahi fas jeyegi aur aage nahi badhegi

    // also
  console.log("hacked by middleware")
    // if we write next() (line 20) then this part i.e console.log("hacked by middleware") 
// will not run .f

    })

app.get('/', (req, res) => {
    console.log('m2')
    // m2 is printed in the console
    next()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// using the command "nodemon main.js" we can start the server
// visit localhost 3000 to see the website
// if you see hello world on the screen then it means that our express app is chalu.


// here the request is /about and the response is hello world
app.get('/about', (req, res) => {
    res.send('Hello about!')
  })

  app.get('/contact', (req, res) => {
    res.send('Hello contact!')
  })

