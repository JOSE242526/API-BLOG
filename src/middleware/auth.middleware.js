//? Middleware para proteger mis rutas

//? Passport tiene diferentes estrategias para manejar logins (bearer, jwt, facebook, google oath, etc)
const JwtStrategy = require('passport-jwt').Strategy; 

//? Extraer el token de los headers de mi petición
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport')


const jwtSecret = require('../../config').api.jwtSecret

const authMiddleware = () => {
    const options = {
        jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey
    }
}

module.exports = passport
