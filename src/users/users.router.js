const router = require('express').Router()

const usersServices = require('./users.services')

router.get('/', usersServices.getAllUsers)
router.post('/', usersServices.postUser)
router.get('/:id', usersServices.getUserById)

module.exports = router