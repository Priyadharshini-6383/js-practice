const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Age : {
        type : Number,
        required : true
    },
    Role : {
        type : String,
        required : true
    }
})

const User = mongoose.model("User" , schema);
module.exports = User;