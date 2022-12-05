const User = require("../models/users.models");
const bcrypt = require("bcrypt");

const register = async (request, response, next) => {

    try {
        
        const newUser = new User(request.body);
        console.log(request.body);
        createdUser = await newUser.save()
        console.log(createdUser);
        return response.status(201).json(createdUser)

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