const { DataTypes } = require('sequelize')

const db = require('../utils/database')


const Categories = db.define('categories',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [2, 50]
        }
    }
}, {
    timestamps: false
})


module.exports = Categories