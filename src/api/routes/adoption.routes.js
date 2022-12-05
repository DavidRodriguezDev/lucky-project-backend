const express = require("express");

const routerAdoption = express.Router(); //Creamos nuestro enroutador

const {getAllAdoption, getAdoption, postNewAdoption, putAdoption, deleteAdoption} = require("../controllers/adoption.controllers");

routerAdoption.get('/', getAllAdoption);        //GET Creamos todas las funciones, las exportamos y las anexionamos al router correspondiente
routerAdoption.get('/:id', getAdoption);         //GET Unitario por id
routerAdoption.post('/', postNewAdoption);          //POST Para crear un nuevo elemento a la base de datos.
routerAdoption.put('/:id', putAdoption);     //PUT Para modificar un elemento de la base de datos recibiendo como parámetro un id
routerAdoption.delete('/:id', deleteAdoption );  //DELETE Para eliminar un elemento de la base de datos recibiendo como parámetro un id*/

module.exports = routerAdoption