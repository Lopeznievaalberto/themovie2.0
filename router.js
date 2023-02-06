
const router = require('express').Router();

const moviesRouter = require('./views/moviesRouter');
const seriesRouter = require('./views/seriesRouter');
const usersRouter = require('./views/usersRouter');
const alquilerRouter = require('./views/alquilerRouter');

router.use("/movies", moviesRouter);
router.use("/series", seriesRouter);
router.use("/users", usersRouter);
router.use('/alquiler', alquilerRouter);

module.exports = router;
