const express = require('express')
const app = express()
const port = 3000

//routes
app.get('/', (req, res) => {
  res.send('Hello NodeAPI')
})

app.listen(port, () => {
  console.log(`Node API is running on port ${port}`)
})