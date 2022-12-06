const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Categories = require('./categories.models')
const Users = require('./users.models')

const Posts = db.define('posts', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull:false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
           key: 'id',
           model: Users
        }
    },
    coverUrl:{
        type: DataTypes.STRING
    },
    categoryId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
           key: 'id',
           model: Categories
        }
    }
})

module.exports = Posts