
const router = require('express').Router();

const moviesRouter = require('./views/moviesRouter');
const seriesRouter = require('./views/seriesRouter');

router.use("/movies", moviesRouter);
router.use("/series", seriesRouter);



module.exports = router;
