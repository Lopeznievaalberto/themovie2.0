
const express = require('express');
const router = express.Router();
const seriesControllers = require('../controllers/seriesControllers');

//Endpoints
router.get("/getAll", seriesControllers.getAllSeries);
router.post("/newSerie", auth, seriesControllers.newSerie);
router.put("/updateSerie", auth, seriesControllers.updateSerie);
router.delete("/deleteSerie", auth, seriesControllers.deleteSerie);
router.post("/rating", seriesControllers.postSeriesByRating);
router.post("/id", seriesControllers.postSeriesById);
router.post("/tittle", seriesControllers.postSeriesByTittle);
router.post("/genre", seriesControllers.postSeriesByGenre);
router.post("/newChapSevenDays", seriesControllers.postnewChapSevenDays);
router.post("/accessTheatreCinema", seriesControllers.postaccessTheatreCinema);


module.exports = router;