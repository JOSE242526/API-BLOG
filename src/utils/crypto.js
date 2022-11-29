const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
    return bcrypt.hashPassword(plainPassword)
}

const comparePassword = (plainPassword, hashPassword) => {
    return bcrypt.compareSync()
}