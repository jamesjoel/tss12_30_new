require("../config/database");
const mongoose = require("mongoose");

const Student = mongoose.Schema({
    fullname : String,
    age : Number
})

module.exports = mongoose.model("student", Student);
