
const router = require('express').Router();

const moviesRouter = require('./views/moviesRouter');
const seriesRouter = require('./views/seriesRouter');
const usersRouter = require('./views/usersRouter');

router.use("/movies", moviesRouter);
router.use("/series", seriesRouter);



module.exports = router;
