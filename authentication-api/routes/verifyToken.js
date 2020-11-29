const jwt = require('jsonwebtoken');

module.exports = function (request, response, next) {
    //checking the header for the auth-token value
    const token = request.header('auth-token');
    //if the token doesn't exist then Access Denied
    if(!token) return response.status(401).send('Access Denied');

    //try to validate that the token is valid
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        request.user = verified;
    }catch(err){
        response.status(400).send('Invalid Token');
    }
}