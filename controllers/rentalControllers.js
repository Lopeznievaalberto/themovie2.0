const rental = require('../models/rental');
const rentalControllers = {};

rentalControllers.getAll = async (req, res) => {
    try {
        let result = await rental.find({})
        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message" : "No hay ningun rental."})
        }
    } catch (e) {
        console.error(e)
    }
};

rentalControllers.newrental = async (req, res) => {
    try {
        let user = await rental.create({
            nameRental: req.body.nameRental,
            tittleRental: req.body.tittleRental,
            inicioFecha: req.body.inicioFecha,
            finFecha: req.body.finFecha,
            price: req.body.price
        })
        if (user) {
            res.send({ "Message": 'El rental se ha realizado con exito'})
        } else {
            res.send({ "Message": 'Ha ocurrido un error con el rental'})
        }
    } catch (e) {
        console.error(e)
    }
};

module.exports = rentalControllers