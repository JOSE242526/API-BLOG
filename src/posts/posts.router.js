const router = require('express').Router()

const postsServices = require('./posts.services')
const JwtPassport = require('../middleware/auth.middleware')

router.route("/")
    .get(postsServices.getAllPosts)
    .post( JwtPassport.authenticate('jwt', {session: false}), postsServices.createNewPost)

    module.exports = router