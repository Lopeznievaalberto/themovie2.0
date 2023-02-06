
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
        let result = await movie.create({ poster_path: req.body.poster_path, tittle: req.body.tittle, year: req.body.year, genre: req.body.genre, 
            rating: req.body.rating,  overview: req.body.overview,})
        if (result?.tittle) {
            res.send({ "Message": `La película ${result.tittle} se ha añadido con éxito` })
        }
    } catch (error) {
        console.log(error)
    }
};

moviesControllers.updateMovie = async (req, res) => {
    try{
        let _id = req.body._id;
        let newposter_path = req.body.poster_path;
        let newtittle = req.body.tittle;
        let newYear = req.body.year;
        let newGenre = req.body.genre;
        let newRating = req.body.rating;
        let newoverview = req.body.overview;
        let result = await movie.findByIdAndUpdate({_id:_id}, 
            {
                poster_path: newposter_path,
                tittle: newtittle,
                year: newYear,
                genre: newGenre,
                rating: newRating,
                overview: newoverview,
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
    try {
        let _id = req.body._id;
        let result = await movie.findByIdAndDelete(_id);
        res.send({ "Message": `La película ${result.tittle} se ha eliminado con éxito` })
    } catch (error) {
        console.log("Error deleting movie", error);
    }
};

moviesControllers.postMoviesByRating = async (req, res) => {
    try {
        const rating = req.body.rating;
        if (rating <= 10) {
            const rate = await movie.find({ rating: rating });
            res.send( rate);
        } else {
            res.send({ "Message": 'rating no válido,${rated}' })
        }
    } catch (error) {
        res.send({ "Message": 'rating/movie not found, ${rated}' })
    }
};

moviesControllers.postMoviesById = async (req, res) => {
    try {
        let _id = req.body._id;
        const moviesbyid = await movie.find({_id: _id});
        res.send({ "Message": moviesbyid});
    } catch (error) {
        res.send({"Message": `id not register ${_id}`})
    }
};

moviesControllers.postMoviesBytittle = async (req, res) => {
    try {
        const tittle = req.body.tittle;
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
    try {
        const genre = req.body.genre;
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
