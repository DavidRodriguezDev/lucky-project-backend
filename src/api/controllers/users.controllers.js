const User = require("../models/users.models");

const register = async (request, response, next) => {

    try {
        
        const newUser = new User(request.body);
        createdUser = newUser.save()
        return response.status(201).json(createdUser)

    } catch (error) {
        
        return response.status(500).json(error);

    }

}

const login = async (request, response, next) => {
    
}

const logout = async (request, response, next) => {
    
}

module.exports = {register, login, logout}