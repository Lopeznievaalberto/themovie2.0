
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
    let id = req.body.id;
    let tittle = req.body.tittle;
    let year = req.body.year;
    let genre = req.body.genre;
    let rating = req.body.rating;

    try {
        let result = await serie.create({ id: id, tittle: tittle, year: year, genre: genre, rating: rating })
        if (result?.tittle) {
            res.send({ "Message": `La serie ${result.tittle} se ha añadido con éxito` })
        }
    } catch (error) {
        console.log(error)
    }

};
seriesControllers.updateSerie = async (req, res) => {
    let id = req.body.id;
    let tittle = req.body.tittle;
    let year = req.body.year;
    let genre = req.body.genre;
    let rating = req.body.rating;


    try {

        let result = await serie.findByIdAndUpdate(id, {
            $set: {
                tittle: newTittle,
                year: newYear,
                genre: newGenre,
                rating: newRating
            }
        }).setOptions({ returnDocument: 'after' })

        if (result?.tittle) {
            res.send(result)
        }

    } catch (error) {
        console.log("Error tittle no encontrado", error);
    }
}
seriesControllers.deleteSerie = async (req, res) => {
    let id = req.body.id;

    try {
        let result = await serie.findByIdAndDelete(id);
        res.send({ "Message": `La serie ${result.tittle} se ha eliminado con éxito` })

    } catch (error) {
        console.log("Error deleting serie", error);

    }
};





seriesControllers.postSeriesByRating = async (req, res) => {
    const rating = req.body.rating;
    try {
        if (rating <= 10) {
            const rating = await serie.find({ rating: rating });
            res.send({ "Message": "rating subido" });
        } else {
            res.send({ "Message": 'rating no válido,${rated}' })
        }
    } catch (error) {
        res.send({ "Message": 'rating/serie not found, ${rated}' })
    }
};
seriesControllers.postSeriesById = async (req, res) => {
    let id = req.body.id;
    try {
        const seriesbyid = await serie.find({id: id});
        res.send({ "Message": seriesbyid});
    
    } catch (error) {
        res.send({"Message": `id not register ${id}`})
    }
};

seriesControllers.postSeriesByTittle = async (req, res) => {
    const tittle = req.body.tittle;
    try {
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
    const genre = req.body.genre;
    try {
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
    const SevenDays = req.body.newChapSevenDays;
    try {
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
    const accessTheatreCinema = req.body.accessTheatreCinema;
    try {
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
