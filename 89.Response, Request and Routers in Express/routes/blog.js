// this is a route file
// blog ke jitne bgi endpoints hai woh yaha se (from this file) handle honge

// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })
  
  // POST method route
  app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })

  // For endpoints 