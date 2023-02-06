
const express = require('express');
const router = express.Router();
const seriesControllers = require('../controllers/seriesControllers');

//Endpoints
router.get("/getAll", seriesControllers.getAllSeries);
router.post("/newSerie", seriesControllers.newSerie);
router.put("/updateSerie", seriesControllers.updateSerie);
router.delete("/deleteSerie", seriesControllers.deleteSerie);
router.post("/rating", seriesControllers.postSeriesByRating);
router.post("/id", seriesControllers.postSeriesById);
router.get("/", seriesControllers.postSeriesBytittle);
router.post("/genre", seriesControllers.postSeriesByGenre);
router.post("/newChapSevenDays", seriesControllers.postnewChapSevenDays);
router.post("/accessTheatreCinema", seriesControllers.postaccessTheatreCinema);
router.post("/grupo", seriesControllers.postgrupo);

module.exports = router;