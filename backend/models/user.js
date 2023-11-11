const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
    _id: String,
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin: Boolean,
    createdDate: Date
});

const User = mongoose.model("User",userScheme);

module.exports = User;
