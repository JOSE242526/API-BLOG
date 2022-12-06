const Users = require('./posts.models')
const Categories = require('./categories.models')
const Posts = require('./posts.models')
const { post } = require('../users/users.router')

const initModels = () => {
    /* una categoria -> tiene mucho posts*/
    Categories.hasMany(Posts)

     /* un posts -> tiene una categoria*/
    Posts.belongsTo(Categories)

    Posts.belongsTo(Users)

    Users.hasMany(Posts)


/*

?    1:1 
*    belongsTo
*    hasOne

?    1:M 
*    belongsTo
*    hasMany

?    M:M 
*    belongsToMany
*    hasMany

?    2 relaciones 1:M
*    belongsTo
*    hasMany

*/

}

module.exports = initModels