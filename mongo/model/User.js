const mongoose = require('../../mongodb')
const { userSchema } = require('../Schema')
const User = mongoose.model('User', userSchema)

const getUserById = async (id) => {
  try {

    const res = await User.findById(id)
    if (res) {
      return res
    }
    return 'no user found'
  } catch (err) {
    return err
  }
}

const getAllUser = async () => {
  try {
    const res = await User.find()
    if (res) {
      return res
    }
    return 'no user found'
  } catch (err) {
    return err
  }
}

const addUser = async (firstName, lastName) => {
  try {
    const user = new User({
      firstName,
      lastName
    })
    return await user.save()
  } catch (err) {
    return err
  }
}

const editUser = async (id, firstName, lastName) => {
  try {
    const user = { firstName, lastName }
    const res = await User.findByIdAndUpdate(id, user, { new: true })
    if (res) {
      return res
    }
    return 'no user found'

  } catch (err) {
    return err
  }
}


module.exports = {
  getAllUser,
  getUserById,
  addUser,
  editUser
}