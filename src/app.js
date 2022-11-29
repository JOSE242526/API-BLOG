const express = require('express')

const app = express()
const { port } = require('../config').api

app.use(express.json())

app.listen(port, () => {
    console.log(`Server Started at port ${port}`)
})