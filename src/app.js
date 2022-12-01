const express = require('express')

const app = express()
const db = require('./utils/database')
const { port } = require('../config').api

const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')

db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database Authenticated'))
    .catch((err) => console.log(err))


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({messege: 'Probando'})
})


app.use('/api/v1/users', userRouter)

app.use('/api/v1/auth', authRouter)



app.listen(port, () => {
    console.log(`Server Started at port ${port}`)
})