
const express = require('express');
const router = express.Router();
const seriesControllers = require('../controllers/seriesControllers');

//Endpoints
router.get("/getAll", seriesControllers.getAllSeries);
router.post("/newSerie", seriesControllers.newSerie);
router.put("/updateSerie", seriesControllers.updateSerie);
router.delete("/deleteSerie", seriesControllers.deleteSerie);
router.get("/rating", seriesControllers.postSeriesByRating);
router.get("/id", seriesControllers.postSeriesById);
router.get("/tittle", seriesControllers.postSeriesByTittle);
router.get("/genre", seriesControllers.postSeriesByGenre);
router.get("/newChapSevenDays", seriesControllers.postnewChapSevenDays);
router.get("/accessTheatreCinema", seriesControllers.postaccessTheatreCinema);


module.exports = router;