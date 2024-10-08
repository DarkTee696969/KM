const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true,  'Please provide email']
    },
    password: {
        type: String,
        required: [true,  'Please provide password']
    },
    username: {
        type: String,
        required: [true,  'Please provide username']
    },
    tel: {
        type: String,
        required: [true,  'Please provide tel']
    },
    location: {
        type: String,
        required: [true,  'Please provide location']
    }
})

 UserSchema.pre('save', function(next)  {
    const user = this 

    bcrypt.hash(user.password,  10).then(hash => {
        user.password = hash
        next()
    }).catch(error => {
        console.error(error)
    })
})

const User = mongoose.model('User', UserSchema)
module.exports = User