const router = require('express').Router()
const JwtPassport = require('../middleware/auth.middleware')

const usersServices = require('./users.services')

router.get('/',  usersServices.getAllUsers)
router.post('/', usersServices.postUser)
router.get('/me', JwtPassport.authenticate('jwt', {session: false}), usersServices.getMyuser)
router.get('/:id', JwtPassport.authenticate('jwt', {session: false}), usersServices.getUserById)

router.patch('/:id', JwtPassport.authenticate('jwt', {session: false}), usersServices.patchUser) 
router.delete('/:id', JwtPassport.authenticate('jwt', {session: false}), usersServices.deleteUser) 


module.exports = router