const Posts = require('../models/posts.models')
const Categories = require('../models/categories.models')
const Users = require('../models/users.models')
const uuid = require('uuid')


const findAllPosts = async () => {
    const data = await Posts.findAll({
        attributes: {
            exclude: ['categoryId', 'userId']
        },
        include: [
            {
                model: Categories
            },
            {
                model: Users,
                attributes: {
                    exclude: ['email', 'password', 'role', 'createdAt', 'updateAt']
                }

            }
        ]
    })
    return data
}

const createPost = async (obj) => {
    const data = await Posts.create({
        id: uuid.v4(),
        title: obj.title,
        content: obj.content,
        userId: obj.userId,
        coverUrl: obj.coverUrl,
        categoryId: obj.categoryId
    })
    return data
}

module.exports = {
    findAllPosts,
    createPost
}