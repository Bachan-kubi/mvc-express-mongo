const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    id:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    age:{
        type: Number,
        require: true
    }, 
    email:{
        type: String,
        require: true
    },
    createdOn: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Users", usersSchema);