const User = require("../models/User")

module.exports = class UserContoller {

    static async showUsers(req, res) {
        const user = await User.findAll({raw: true})
        res.render("users/home", {user})
    }

    static addUser(req, res) {
        res.render("users/create")
    }

    static async addUserSave(req, res) {
        const user = {
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone
        }
        try{
            await User.create(user)
            res.redirect("/")  
        } catch(err) {
            console.log(err)
        }
    }

    static async deleteUser(req, res) {
        const id = req.body.id
        try {
            await User.destroy({where: {id: id}})
            res.redirect("/")
        } catch (err) {
            console.log(err)
        }
    }

    static async updateUser(req, res) {
        const id = req.params.id
        try {
            const user = await User.findOne({where: {id: id}, raw:true})
            console.log(user)
            res.render("users/edit", {user})
        } catch (error) {
            console.log(error)
        }
    }

    static async updateUserSave(req, res) {
        const id = req.body.id
         console.log(id)
        const user = {
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone
        }
        console.log(user)
        try {
            await User.update(user, {where: {id: id}})
            res.redirect("/")
        } catch (error) {
            console.log(error)
        }
    }
}