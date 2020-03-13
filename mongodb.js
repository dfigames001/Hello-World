require('dotenv').config()
const mongoose = require('mongoose')
const CONNECTION = process.env.CONNECTION_STRING

mongoose.connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', (error) => {
  console.error.bind(console, error)
})

db.once('open', () => {
  console.log("Connected to MongoDB!")
})