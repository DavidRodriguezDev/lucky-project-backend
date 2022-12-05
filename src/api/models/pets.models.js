const mongoose = require("mongoose"); //Requerimos primero mongoose.

const Schema = mongoose.Schema;

const petSchema = new Schema({

    species : {type : String, required : true},
    birthday : {type : String, required : true},
    sex : {type : String},
    size : {type : String, required : true},
    weight : {type : String, required : true},
    personality : {type : String},
    history : {type : String},  
    vaccinated : {type : Boolean, required : true},
    dewormed : {type : Boolean, required : true},
    healthy : {type : Boolean, required : true},
    sterilized  : {type : Boolean, required : true},
    identified : {type : Boolean, required : true},
    microchip : {type : Boolean, required : true},
    about : {type : String},
    requirements : {type : String, required : true},
    rate : {type : Number, required : true},
    shipping : {type : String, required : true}
}, 
{
    timestamps : true
})

const Pet = mongoose.model("pets", petSchema); //Creamos nuestro modelo para la protectora.

module.exports = Pet;
