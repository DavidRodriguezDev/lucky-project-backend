const mongoose = require("mongoose"); //Requerimos primero mongoose.

const Schema = mongoose.Schema;

const adoptionSchema = new Schema({

    name : {type : String, required : true},
    email : {type : String, required : true},
    phone : {type : String},
    dni : {type : String, required : true},
    adress : {type : String, required : true},
    cp : {type : String},
    city : {type : String},  
    moreAnimals : {type : Boolean, required : true},
    which : {type : Boolean, required : true},
    sociable : {type : Boolean, required : true},
    why  : {type : String, required : true},
    needs : {type : String, required : true},
    expenses : {type : Boolean, required : true},
    nutrition : {type : Boolean, required : true},
    whereDoYouLive : {type : String, required : true},
    renting : {type : Boolean, required : true},
    petPermission : {type : Boolean, required : true},
    moving : {type : String},
    garden : {type : Boolean},
    morePeople : {type:Boolean},
    allAgree : {type:Boolean},
    visitAgree : {type:Boolean}
}, 
{
    timestamps : true
})

const Adoption = mongoose.model("adoption", adoptionSchema); //Creamos nuestro modelo para la protectora.

module.exports = Adoption;
