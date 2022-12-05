const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    photo : {type : String},
    pets : {type : Schema.Types.ObjectId, ref : "Pets"}
}, {
    timestamps : true
})

userSchema.pre("save", function(next) { //Antes de guardar transformamos la password encriptada
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;