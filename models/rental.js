const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema ({
    nameRental: {
        type: String
    },
    tittleRental: {
        type: String
    },
    inicioFecha: {
        type: String
    },
    finFecha: {
        type: String
    },
    price: {
        type: String
    }
});

const rental = mongoose.model('rental', rentalSchema);
module.exports = rental;