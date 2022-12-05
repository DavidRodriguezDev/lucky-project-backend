const User = require("../models/users.models");
const bcrypt = require("bcrypt");
const {validationPassword, validationEmail} = require("../../validators/validation");

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

        newUser.password = bcrypt.hashSync(newUser.password, 10);
        const createdUser = await newUser.save();
        return response.status(201).json(createdUser);

    } catch (error) {
        
        return response.status(500).json(error);

    }

}

const login = async (request, response, next) => {
    
    try {
        
        const userInfo = await User.findOne({email : request.body.email})
        if(bcrypt.compareSync(request.body.password, userInfo.password)) {
                
            userInfo.password = null;
            return response.status(200).json(userInfo);

        } else {
            return response.status(400).json({message : "Invalid password"});
        }

    } catch (error) {
        
        return response.status(500).json(error);

    }
}

const logout = async (request, response, next) => {
    
}

module.exports = {register, login, logout}