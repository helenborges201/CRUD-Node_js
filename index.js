const { urlencoded } = require("express")
const express = require("express")
const exphbs = require("express-handlebars")
const conn = require("./db/conn")

const app = express()

// models
const User = require("./models/User")
// routes
const usersRoutes = require("./routes/usersRoutes")

// controllers
const UserContoller = require("./controllers/UserController")


// template engine
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

// receber a resposta do body
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

// public path
app.use(express.static("public"))

app.use("/", usersRoutes)
app.get("/", UserContoller.showUsers)

conn.sync()
.then(() => {
    app.listen(process.env.PORT || 3000)
})
.catch((err) => console.log("Aconteceu um erro: " + err))