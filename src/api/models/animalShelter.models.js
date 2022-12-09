const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const animalShelterSchema = new Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    photo : {type : String},
    address : {type : String, required : true},
    pets : [{type : Schema.Types.ObjectId, ref : "Pets"}]
}, {

    timestamps : true

})

animalShelterSchema.pre("save", function(next) {

    this.password = bcrypt.hashSync(this.password, 10);
    next();

})

const AnimalShelter = mongoose.model("AnimalShelter", animalShelterSchema);

module.exports = AnimalShelter;