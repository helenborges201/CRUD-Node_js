const express = require("express")
const router = express.Router()
const UserController = require("../controllers/UserController")


router.get("/edit/:id", UserController.updateUser)
router.post("/edit", UserController.updateUserSave)
router.post("/delete", UserController.deleteUser)
router.get("/add", UserController.addUser)
router.post("/add", UserController.addUserSave)
router.get("/", UserController.showUsers)

module.exports = router