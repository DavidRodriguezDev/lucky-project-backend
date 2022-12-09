const express = require("express");

const animalShelterRouter = express.Router();

const {register, login, logout} = require("../controllers/animalShelter.controllers");

animalShelterRouter.post("/register", register)
animalShelterRouter.post("/login", login)
animalShelterRouter.post("/logout", logout)

module.exports = animalShelterRouter;