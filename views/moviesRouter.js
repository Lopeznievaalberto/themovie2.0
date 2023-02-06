
const express = require('express');
const router = express.Router();
const moviesControllers = require('../controllers/moviesControllers');

//Endpoints
router.get("/getAll", moviesControllers.getAllMovies);
router.post("/newMovie", moviesControllers.newMovie);
router.put("/updateMovie", moviesControllers.updateMovie);
router.delete("/deleteMovie", moviesControllers.deleteMovie);
router.post("/rating", moviesControllers.postMoviesByRating);
router.post("/id", moviesControllers.postMoviesById);
router.get("/tittle", moviesControllers.postMoviesBytittle);
router.post("/genre", moviesControllers.postMoviesByGenre);


module.exports = router;