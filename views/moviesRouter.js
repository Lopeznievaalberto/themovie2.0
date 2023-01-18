
const express = require('express');
const router = express.Router();
const moviesControllers = require('../controllers/moviesControllers');

//Endpoints
router.get("/getAll", moviesControllers.getAllMovies);
router.post("/newMovie", auth, moviesControllers.newMovie);
router.put("/updateMovie", auth, moviesControllers.updateMovie);
router.delete("/deleteMovie", auth, moviesControllers.deleteMovie);
router.post("/rating", moviesControllers.postMoviesByRating);
router.post("/id", moviesControllers.postMoviesById);
router.post("/tittle", moviesControllers.postMoviesByTittle);
router.post("/genre", moviesControllers.postMoviesByGenre);


module.exports = router;
