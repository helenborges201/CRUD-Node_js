const  { Sequelize } = require("sequelize");
require("dotenv/config")
const sequelize = new Sequelize("users", "root", process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: "7780"
})

try {
   sequelize.authenticate()
   console.log("Conectamos com sucesso!") 
} catch (error) {
    console.log("Ocorreu um erro: " + error)
}

module.exports = sequelize