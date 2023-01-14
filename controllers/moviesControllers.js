
const mongoose = require('mongoose');
const movie = require('../models/movie');
const moviesControllers = {};

moviesControllers.getAllMovies = async (req, res) => {
    try {
        let allMovies = await movie.find({});
        if (allMovies.length > 0) {
            res.send(allMovies)
        } else {
            res.send({ "Message": "Película no encontrada" })
        }
    } catch (error) {
        console.log(error);
    }
};

moviesControllers.newMovie = async (req, res) => {
    try {
        let result = await movie.create({ tittle: req.body.tittle, year: req.body.year, genre: req.body.genre, 
            rating: req.body.rating })
        if (result?.tittle) {
            res.send({ "Message": `La película ${result.tittle} se ha añadido con éxito` })
        }
    } catch (error) {
        console.log(error)
    }
};

moviesControllers.updateMovie = async (req, res) => {
    let id = req.body.id;
    let tittle = req.body.tittle;
    let year = req.body.year;
    let genre = req.body.genre;
    let rating = req.body.rating;
    try {
        let result = await movie.findByIdAndUpdate(id, {
            $set: {
                tittle: newTittle,
                year: newYear,
                genre: newGenre,
                rating: newRating
            }
        }
        ).setOptions({ returnDocument: 'after' })
        if (result?.tittle) {
            res.send(result)
        }
    } catch (error) {
        console.log("Error tittle no encontrado", error);
    }
};

moviesControllers.deleteMovie = async (req, res) => {
    let id = req.body.id;
    try {
        let result = await movie.findByIdAndDelete(id);
        res.send({ "Message": `La película ${result.tittle} se ha eliminado con éxito` })
    } catch (error) {
        console.log("Error deleting movie", error);
    }
};

moviesControllers.getAllMovies = async (req, res) => {
    try {
        let allMovies = await movie.find({});
        if (allMovies.length > 0) {
            res.send(allMovies)
        } else {
            res.send({ "Message": "Película no encontrada" })
        }
    } catch (error) {
        console.log(error);
    }
};

moviesControllers.postMoviesByRating = async (req, res) => {
    const rating = req.body.rating;
    try {
        if (rating <= 10) {
            const rating = await movie.find({ rating: rating });
            res.send({ "Message": "rating subido" });
        } else {
            res.send({ "Message": 'rating no válido,${rated}' })
        }
    } catch (error) {
        res.send({ "Message": 'rating/movie not found, ${rated}' })
    }
};
moviesControllers.postMoviesById = async (req, res) => {
    let id = req.body.id;
    try {
        const moviesbyid = await movie.find({id: id});
        res.send({ "Message": moviesbyid});
    } catch (error) {
        res.send({"Message": `id not register ${_id}`})
    }
};

moviesControllers.postMoviesByTittle = async (req, res) => {
    const tittle = req.body.tittle;
    try {
        const moviesbytittle = await movie.find({
            tittle: tittle
        })
        if(moviesbytittle.length === 0){
            res.send({"Message": `Movie not found, ${tittle} `});
        }else{
            res.send(moviesbytittle)
        }
    } catch (error) {
        console.log(error)
    }
};

moviesControllers.postMoviesByGenre = async (req, res) => {
    const genre = req.body.genre;
    try {
        const moviesbygenre = await movie.find({
            genre: genre
        })
        if(moviesbygenre.length === 0){
            res.send({"Message": `Genre not found, ${genre} `});
        }else{
            res.send(moviesbygenre)
        }
    } catch (error) {
        console.log(error)
    }
};

module.exports = moviesControllers;
