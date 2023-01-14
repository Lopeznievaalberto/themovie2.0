Proyecto de themoviedb.

Este proyecto se trata de una base de datos sobre películas que sigue el protocolo MVC(Modelo,Vista,Controlador), representados en las carpetas Models, Views y Controllers, respectivamente.
Se usa la plataforma AtlasDB como servidor de la base de datos, y las librerías bcrypt, dotenv, express, jsonwebtoken, mongoose, y nodemon. 
La base de datos se conecta a través de los siguientes Endpoints:

-router.get("/getAll", moviesControllers.getAllMovies); 
sirve para obtener un listado de todas las películas

-router.post("/newMovie", moviesControllers.newMovie);
sirve para añadir una película nueva a la base de datos

-router.put("/updateMovie", moviesControllers.updateMovie);
sirve para modificar los datos de una película

-router.delete("/deleteMovie", moviesControllers.deleteMovie);
sirve para borrar un película

-router.post("/rating", moviesControllers.postMoviesByRating);
sirve para obtener las películas con un rating

-router.post("/id", moviesControllers.postMoviesById);
sirve para obtener las películas con un id

-router.post("/tittle", moviesControllers.postMoviesByTittle);
sirve para obtener las películas por un título

-router.post("/genre", moviesControllers.postMoviesByGenre);
sirve para obtener las películas por un género

-router.get("/getAll", seriesControllers.getAllSeries);
sirve para obtener un listado de todas las películas

-router.post("/newSerie", seriesControllers.newSerie);
sirve para añadir una película nueva a la base de datos

-router.put("/updateSerie", seriesControllers.updateSerie);
sirve para modificar los datos de una película

-router.delete("/deleteSerie", seriesControllers.deleteSerie);
sirve para borrar un película

-router.post("/rating", seriesControllers.postSeriesByRating);
sirve para obtener las películas con un rating

-router.post("/id", seriesControllers.postSeriesById);
sirve para obtener las películas con un id

-router.post("/tittle", seriesControllers.postSeriesByTittle);
sirve para obtener las películas por un título

-router.post("/genre", seriesControllers.postSeriesByGenre);
sirve para obtener las películas por un género

-router.post("/newChapSevenDays", seriesControllers.postnewChapSevenDays);
sirve para obtener las series que vayan a tener un estreno en los próximos siete días

-router.post("/accessTheatreCinema", seriesControllers.postaccessTheatreCinema);
sirve para obtener las series que van a ser estrenadas en cines y teatros




























Alberto López Nieva