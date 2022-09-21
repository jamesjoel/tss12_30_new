require("../config/database");
const mongoose = require("mongoose");

const Student = mongoose.Schema({
    fullname : String,
    age : Number,
    city : String
})

module.exports = mongoose.model("student", Student);
