const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        lowercase: true,
        minlength: 5,
        maxlength: 20
    },
    status:{
        type: String,
        default:"to-do"
    },
    tags:{
        type: String,
        validate: [arrayLimit,'{PATH} exceeds the limit of 10']
        /*minItems: 0,
        maxItems: 10,
        description:"must be a array of string and max is 10"*/
    },
    user:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }

})
function arrayLimit(val){
    return val.lenght <= 10
}
const Todo = mongoose.model('Todo',todoSchema)
module.exports = Todo