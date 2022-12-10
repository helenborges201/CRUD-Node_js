const  { Sequelize } = require("sequelize");
const sequelize = new Sequelize("users", "root", "31413484h", {
    host: "mysql://root:0hCZYjzrEugAIH9hSago@containers-us-west-119.railway.app:6374/railway",
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