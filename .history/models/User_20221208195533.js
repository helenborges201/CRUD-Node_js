const  { DataTypes } = require("sequelize")
const db = require("../db/conn")

const User = db.define("User", {
    nome: {
        type: DataTypes.STRING,
        require: true
    },
    email: {
        type: DataTypes.STRING,
        require: true
    },
    telefone: {
        type: DataTypes.STRING,
        require: true
    }
}) 

module.exports = User