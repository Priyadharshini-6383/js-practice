const mongoose = require("mongoose");

const schema = new mongoose.schema({
    Name : {
        type : String,
        required : true
    },
    Age : {
        type : Number,
        true : true
    },
    Role : {
        type : String,
        required : true
    }
})

const User = mangoose.model("User" , schema);
module.exports = User;