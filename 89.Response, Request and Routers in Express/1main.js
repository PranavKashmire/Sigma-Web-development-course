// we dont use getrequest to send big data to server(done using url) 
// we use the postrequest(to handle the sensetive information) not getrequest . Also there is limitation of characters in getrequest(where we put the data in the url)

const express = require('express')
const app = express()
const port = 3000

// 1.this is the get request 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 2.this is the post request
app.post('/', (req, res) => {
  res.send('Hello World!')
})

// 3.this is the listen request
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// there is put request and delte request also


// chaining 1,2,3 requests(it is just another way of writing 1,2,3 )
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   }).post('/', (req, res) => {
//       res.send('Hello World!')
//  }).listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })


//   when we create a website we need to server the html file to others
// for that we need to make a folder named template

app.get('/index', (req, res) => {
  console.log("hey its a put requests")
  res.sendFile('templates/index.html', { root: __dirname })
  // using the res.sendFile we serve the html file 
})

// the names of other methods in responses  are listed in responsemethods.png

// if i want /api to return json file we use res.json
app.get('/api', (req, res) => {
  res.json({ a: 1, b: 2, c: 3 })
  // the text inside the res.json is our json file
  // the json file will contain text "a: 1, b: 2, c: 3"
})

//  json file :
// JSON stands for JavaScript Object Notation
// JSON is a text format for storing and transporting data
// JSON is "self-describing" and easy to understand

// install the extension called json formatter 
// it will beautify the json file 




// install the software "postman" (industry standard)

// express router helps us in organising different cheeze