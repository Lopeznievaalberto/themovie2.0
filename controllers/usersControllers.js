const User = require('../models/user');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const authConfig = require('../config/auth');

const usersControllers = {};

usersControllers.getAllUsers = async (req, res) => {

    try {
        let result = await User.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún usuario." })
        }
    } catch (error) {
        console.log(error);
    }
}

usersControllers.getUsersByName = async (req, res) => {

    let name = req.body.name
    try {
        await User.find({
            name: name
        })
            .then(foundUsers => {
                res.send(foundUsers)
            })
    } catch (error) {
        console.log(error)
    }
}

usersControllers.newUser = async (req, res) => {

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));
    try {
        let user = await User.create({
            name: req.body.name,
            surname: req.body.surname,
            dni: req.body.dni,
            email: req.body.email,
            password: password,
        })
        if (user) {
            res.send({ "Message": `El usuario ${user.name} se ha añadido con éxito` })
        }
    } catch (error) {
        console.log(error)
    }
};

usersControllers.updateUser = async (req, res) => {

    let dni = req.body.dni;
    let newName = req.body.name;
    let newSurname = req.body.surname;
    let newEmail = req.body.email
    let newPassword = req.body.password
    try {
        let updated = await User.findOneAndUpdate(
            { dni: dni },
            {
                name: newName,
                surname: newSurname,
                email: newEmail,
                password: newPassword,
            }).setOptions({ returnDocument: 'after' })
        if (updated) {
            res.send(`Usuario actualizado con éxito`)
        }
    } catch (error) {
        console.log("Error updating user data", error);
    }
}

usersControllers.loginUser = async (req, res) => {

    try {
        let userFound = await User.find({
            email: req.body.email
        })
        if (userFound) {
            if (userFound[0].email === undefined) {
                res.send("Usuario o password incorrecto");
            } else {
                if (bcrypt.compareSync(req.body.password, userFound[0].password)) {

                    let token = jsonwebtoken.sign({ usuario: userFound }, authConfig.SECRET, {
                        expiresIn: authConfig.EXPIRES
                    });
                    let loginOk = `Bienvenido de nuevo ${userFound[0].name}`;
                    res.json({
                        loginOk,
                        token: token
                    })
                } else {
                    res.send("Usuario o password incorrecto");
                }
            }
        }
    } catch (error) {
        res.send("Email o password incorrectos");
    }
}

module.exports = usersControllers;
