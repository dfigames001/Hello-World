const express = require('express')
const app = express()
const { getAllUser, getUserById, addUser, editUser } = require('./mongo/model/User')
const port = 5000

app.use(express.json())

app.get('/user', async (req, res) => {
  const user = await getAllUser()
  res.json(user)
})
app.get('/user/:id', async (req, res) => {
  const user = await getUserById(req.params.id)
  res.json(user)
})

app.post('/user', async (req, res) => {
  const { firstName, lastName } = req.body
  if (!firstName || !lastName) {
    res.send('First name or Last name is empty!')
    return
  }
  const user = await addUser(firstName, lastName)
  res.json(user)
})

app.put('/user', async (req, res) => {

  const { firstName, lastName, id } = req.body
  if (!id) {
    res.send('Empty id!')
    return
  }
  if (!firstName || !lastName) {
    res.send('First name or Last name is empty!')
    return
  }

  const user = await editUser(id, firstName, lastName)
  res.json(user)
})


app.listen(port, () => {
  console.log(`Listening on PORT:${port}`)
})