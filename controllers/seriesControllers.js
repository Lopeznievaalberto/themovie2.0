
const mongoose = require('mongoose');
const serie = require('../models/serie');
const seriesControllers = {};

seriesControllers.getAllSeries = async (req, res) => {
    try {
        let allSeries = await serie.find({});
        if (allSeries.length > 0) {
            res.send(allSeries)
        } else {
            res.send({ "Message": "Serie no encontrada" })
        }
    } catch (error) {
        console.log(error);
    }
};

seriesControllers.newSerie = async (req, res) => {
    try {
        let result = await serie.create({ tittle: req.body.tittle, year: req.body.year, genre: req.body.genre, 
            rating: req.body.rating, newChapSevenDays : req.body.newChapSevenDays , 
            accessTheatreCinema: req.body.accessTheatreCinema})
        if (result?.tittle) {
            res.send({ "Message": `La serie ${result.tittle} se ha añadido con éxito` })
        }
    } catch (error) {
        console.log(error)
    }
};

seriesControllers.updateSerie = async (req, res) => {
    let _id = req.body._id;
    let tittle = req.body.tittle;
    let year = req.body.year;
    let genre = req.body.genre;
    let rating = req.body.rating;
    let newChapSevenDays = req.body.newChapSevenDays;
    let accessTheatreCinema= req.body.accessTheatreCinema;
    try {
        let result = await serie.findByIdAndUpdate(_id, {
            $set: {
                tittle: newTittle,
                year: newYear,
                genre: newGenre,
                rating: newRating,
                newChapSevenDays: newnewChapSevenDays,
                accessTheatreCinema : newaccessTheatreCinema
            }
        }).setOptions({ returnDocument: 'after' })

        if (result?.tittle) {
            res.send(result)
        }
    } catch (error) {
        console.log("Error tittle no encontrado", error);
    }
};

seriesControllers.deleteSerie = async (req, res) => {
    try {
        let _id = req.body._id;
        let result = await serie.findByIdAndDelete(_id);
        res.send({ "Message": `La serie ${result.tittle} se ha eliminado con éxito` })
    } catch (error) {
        console.log("Error deleting serie", error);
    }
};

seriesControllers.postSeriesByRating = async (req, res) => {
    try {
        const rating = req.body.rating;
        if (rating <= 10) {
            const rate = await serie.find({ rating: rating });
            res.send(rate);
        } else {
            res.send({ "Message": 'rating no válido,${rated}' })
        }
    } catch (error) {
        res.send({ "Message": 'rating/serie not found, ${rated}' })
    }
};

seriesControllers.postSeriesById = async (req, res) => {
    try {
        let _id = req.body._id;
        const seriesbyid = await serie.find({_id: _id});
        res.send({ "Message": seriesbyid});
    } catch (error) {
        res.send({"Message": `id not register ${_id}`})
    }
};

seriesControllers.postSeriesByTittle = async (req, res) => {
    try {
        const tittle = req.body.tittle;
        const seriesbytittle = await serie.find({
            tittle: tittle
        })
        if(seriesbytittle.length === 0){
            res.send({"Message": `Serie not found, ${tittle} `});
        }else{
            res.send(seriesbytittle)
        }
    } catch (error) {
        console.log(error)
    }
};



seriesControllers.postSeriesByGenre = async (req, res) => {
    try {
        const genre = req.body.genre;
        const seriesbygenre = await serie.find({
            genre: genre
        })
        if(seriesbygenre.length === 0){
            res.send({"Message": `Genre not found, ${genre} `});
        }else{
            res.send(seriesbygenre)
        }
    } catch (error) {
        console.log(error)
    }
};

seriesControllers.postnewChapSevenDays = async (req, res) => {
    try {
        const SevenDays = req.body.newChapSevenDays;
        const newChapSevenDays = await serie.find({
           SevenDays: SevenDays
        })
        if(newChapSevenDays.length === 0){
            res.send({"Message": ` not found, ${SevenDays} `});
        }else{
            res.send(newChapSevenDays)
        }
    } catch (error) {
        console.log(error)
    }
};

seriesControllers.postaccessTheatreCinema= async (req, res) => {
    try {
        const accessTheatreCinema = req.body.accessTheatreCinema;
        const seriesTheatreCinema = await serie.find({
           accessTheatreCinema: accessTheatreCinema
        })
        if(seriesTheatreCinema.length === 0){
            res.send({"Message": ` not found, ${accessTheatreCinema} `});
        }else{
            res.send(seriesTheatreCinema)
        }
    } catch (error) {
        console.log(error)
    }
};

module.exports = seriesControllers;
