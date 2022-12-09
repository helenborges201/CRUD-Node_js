const  { Sequelize } = require("sequelize");
const sequelize = new Sequelize("users", "root", "31413484h", {
    host: "localhost",
    dialect: "mysql",
})

try {
   sequelize.authenticate()
   console.log("Conectamos com sucesso!") 
} catch (error) {
    console.log("Ocorreu um erro: " + error)
}

module.exports = sequelize