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
    let app_port = process.env.YOUR_PORT || process.env.PORT || 80;
    let app_host = process.env.YOUR_HOST || '0.0.0.0';
    app.listen(app_port, app_host, function() {
        console.log('Listening on port %d', app_port);
    });  
})
.catch((err) => console.log("Aconteceu um erro: " + err))