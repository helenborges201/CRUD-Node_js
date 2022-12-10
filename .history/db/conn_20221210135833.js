const  { Sequelize } = require("sequelize");
const sequelize = new Sequelize("users", "root", "0hCZYjzrEugAIH9hSago", {
    host: "containers-us-west-119.railway.app",
    dialect: "mysql",
    port: "3306"
})

try {
   sequelize.authenticate()
   console.log("Conectamos com sucesso!") 
} catch (error) {
    console.log("Ocorreu um erro: " + error)
}

module.exports = sequelize