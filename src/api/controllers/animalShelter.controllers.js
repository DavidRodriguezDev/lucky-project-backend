const AnimalShelter = require("../models/animalShelter.models");
const bcrypt = require("bcrypt");
const {validationPassword, validationEmail} = require("../../validators/validation");
const {generateSign, verifyToken} = require("../../jwt/jwt");
const User = require("../models/users.models");

const register = async (request, response, next) => {

    try {
        
        const newUser = new User(request.body);

        if(!validationEmail(request.body.email)) {
            console.log({code : 403, message : "Invalid email"});
            response.status(403).json({message : "Invalid email"});
            return next();
        }

        if(!validationPassword(request.body.password)) {
            console.log({code : 403, message : "Invalid password"});
            response.status(403).json({message : "Invalid password"});
            return next();
        }

        newUser.password = bcrypt.hashSync(newUser.password, 10)
        const createdUser = await newUser.save();
        return response.status(201).json(createdUser);

    } catch (error) {
        
        return response.status(500).json(error);

    }

}

const login = async (request, response, next) => {

    try {
        
        const userInfo = await User.findOne({email : request.body.email})
        if(bcrypt.compare(request.body.password, userInfo.password)) {
                
            const token = generateSign(userInfo._id, userInfo.email)  //Pasamos como parámetros _id y email para generar la firma.
            console.log(token);
            return response.status(200).json({token : token}); //Devolvemos el token

        } else {
            return response.status(400).json({message : "Invalid password"});
        }

    } catch (error) {
        
        return response.status(500).json(error);

    }
}

const logout = async (request, response, next) => {
    
    try {
        
        response.status(200).json({token : null})

    } catch (error) {
        return response.status(500).json(error);
    }

}

module.exports = {register, login, logout}
