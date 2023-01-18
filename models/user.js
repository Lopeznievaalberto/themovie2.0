const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    dni: {
        type: String,
        required: true,
        unique: true,
        immutable: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password : {
        type: String,
        required: true
    },
  

});

const User = mongoose.model("User", userSchema);
module.exports = User;