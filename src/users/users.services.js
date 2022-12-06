const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    userControllers.findAllUser()
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json({message: err.message});
    })
};

const getUserById = (req, res) => {
    const id = req.params.id
    userControllers.findUserById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            }else{
                res.status(404).json({message: 'Invalid ID'} )
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message});
        })
};

const postUser = (req, res) => {
    const { first_name, last_name, user_name, email, password, age, country} = req.body
    userControllers.createUser({ first_name, last_name, user_name, email, password, age, country })
    .then((data) => {
        res.status(201).json(data)
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message,
            fields: { 
                first_name: "string*", 
                last_name: "string*", 
                user_name: "string",
                email: "string",
                password: "string",
                age: "number",
                country: 'COL'
            }});
    })
};


const getMyuser = (req, res) => {
    const id = req.user.id
    userControllers.findUserById(id)
        .then((data) =>{
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message});
        })
}

module.exports = {
    getAllUsers,
    getUserById, 
    postUser,
    getMyuser
}