const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    photo : {type : String, required : true},
    pets : {type : Schema.Types.ObjectId, ref : "pets"}
}, {
    timestamps : true
})

const User = mongoose.model("user", userSchema);

module.exports = User;