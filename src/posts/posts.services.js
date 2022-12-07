const PostsControllers = require('./posts.controllers')

const getAllPosts = (req, res) => {
    PostsControllers.findAllPosts()
        .then((data) =>{
            res.status(200).json(data)
        })
        .catch((err) =>{    
            res.status(400).json({messege: err.messege})
        })
}


const createNewPost = (req, res) => {
    const { title, content, coverUrl, categoryId } = req.body
    const userId = req.user.id
    PostsControllers.createPost({ title, content, coverUrl, categoryId, userId })
        .then((data) =>{
            res.status(201).json(data)
        })
        .catch((err) =>{    
            res.status(400).json({
                messege: err.messege,
            fields: {
                title: 'string',
                content: 'string',
                coverUrl: 'https://kjpa.com/asd.png',
                categoryId: 'number',
            }})
        })
}

module.exports = {
    getAllPosts,
    createNewPost
}