const jwt = require("jsonwebtoken");

const isAuth = (request, response, next) => {
    const authorization = request.headers.authorization;

    if(!authorization) {
        return response.status(401).json({message : "Unauthorized"});
    }

    const token = authorization.split(" ")[1];
    
    if(!token) {
        return response.status(401).json({message : "No token provided"})
    }

    try {

        var tokenVerified = jwt.verify(token, process.env.JWT_KEY);
        request._user = tokenVerified;

    } catch (error) {

    }

    console.log(token);

    next();
}

module.exports = {isAuth}