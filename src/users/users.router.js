const router = require('express').Router()
const JwtPassport = require('../middleware/auth.middleware')

const usersServices = require('./users.services')

router.post('/', usersServices.postUser)
router.get('/',  JwtPassport.authenticate('jwt', {session: false}), usersServices.getAllUsers)

/* router.route("/")
    .get('/',   JwtPassport.authenticate('jwt', {session: false}), usersServices.getAllUsers)
    .post('/', usersServices.postUser) */

router.get('/me', JwtPassport.authenticate('jwt', {session: false}), usersServices.getMyuser)
router.patch('/me', JwtPassport.authenticate('jwt', {session: false}), usersServices.pacthMyUser)
router.delete('/me', JwtPassport.authenticate('jwt', {session: false}), usersServices.deleteMe)

router.get('/:id', JwtPassport.authenticate('jwt', {session: false}), usersServices.getUserById)
router.patch('/:id', JwtPassport.authenticate('jwt', {session: false}), usersServices.patchUser) 
router.delete('/:id', JwtPassport.authenticate('jwt', {session: false}), usersServices.deleteUser) 


module.exports = router