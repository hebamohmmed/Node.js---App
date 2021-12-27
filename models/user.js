const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
         unique:true,
        lowercase: true,
        minlength: 8,
    },
    password:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15
    },
    lastName:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15
    },
    dob:{
        type: Date,
        default: Date.now()
    },
    createdAt:{
        type: Date,
        immutable:true,
        timeStamps: true
    },
    updatedAt:{
        type: Date,
        immutable:true,
        timeStamps: true
    },
    
})


const User = mongoose.model('User',userSchema)
module.exports = User