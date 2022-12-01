const { findUserByEmail } = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypto')


/* esta funcion validar si los datos pertenecen o no al usuario */
const checkUserCredential = async (email, password) => {
    try {
        const user = await findUserByEmail(email)
        const verifyPassword = comparePassword(password, user.password)
        if(verifyPassword){
            return user
    }
    return null
    }   catch (err){
            return null
    }
}

module.exports = {
    checkUserCredential,
}