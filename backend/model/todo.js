const mongoose = require('mongoose')


const todoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
    ,
    description: {
        type: String,
        required: true,
        trim: true
    }
    ,
    isCompleted: {
        type: Boolean,
       
        default: false
    }
},
{timestamps: true})

module.exports = mongoose.model('todo', todoSchema)