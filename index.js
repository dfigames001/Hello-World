const express = require('express')
const app = express()
require('./mongodb')
const port = 5000

app.get('/', (req, res) => {
  res.send("Hello World")
})


app.listen(port, () => {
  console.log(`Listening on PORT:${port}`)
})