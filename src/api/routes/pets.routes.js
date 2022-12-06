const express = require("express");

const routerPets = express.Router(); //Creamos nuestro enroutador

const {isAuth} = require("../../middlewares/auth")

const {getAllPets, getPet, postNewPet, putPet, deletePet} = require("../controllers/pets.controllers");

routerPets.get('/',[isAuth], getAllPets);        //GET Creamos todas las funciones, las exportamos y las anexionamos al router correspondiente
routerPets.get('/:id', getPet);         //GET Unitario por id
routerPets.post('/', postNewPet);          //POST Para crear un nuevo elemento a la base de datos.
routerPets.put('/:id', putPet);     //PUT Para modificar un elemento de la base de datos recibiendo como parámetro un id
routerPets.delete('/:id', deletePet);  //DELETE Para eliminar un elemento de la base de datos recibiendo como parámetro un id*/

module.exports = routerPets