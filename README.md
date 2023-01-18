Proyecto de themoviedb.

Este proyecto se trata de una base de datos sobre películas que sigue el protocolo MVC(Modelo,Vista,Controlador), representados en las carpetas Models, Views y Controllers, respectivamente.
Se usa la plataforma AtlasDB como servidor de la base de datos, y las librerías bcrypt, dotenv, express, jsonwebtoken, mongoose, y nodemon. 
La base de datos se conecta a través de los siguientes Endpoints:


Endpoints sobre películas:

-router.get("/getAll", moviesControllers.getAllMovies); 
sirve para obtener un listado de todas las películas

-router.post("/newMovie", auth, moviesControllers.newMovie);
sirve para añadir una película nueva a la base de datos, añadiendo los campos, "tittle", "year", "genre", "rating"; 
actualizando la base de datos con una película nueva

-router.put("/updateMovie", auth, moviesControllers.updateMovie);
sirve para modificar los campos de una película existente, a saber: "tittle", "year", "genre", "rating".

-router.delete("/deleteMovie", auth, moviesControllers.deleteMovie);
sirve para borrar un película, usando como campo requerido: "_id"

-router.post("/rating", moviesControllers.postMoviesByRating);
sirve para obtener las películas con un campo "rating" concreto

-router.post("/id", moviesControllers.postMoviesById);
sirve para obtener las películas con un campo "_id" concreto

-router.post("/tittle", moviesControllers.postMoviesByTittle);
sirve para obtener las películas por un campo "tittle" concreto

-router.post("/genre", moviesControllers.postMoviesByGenre);
sirve para obtener las películas por un campo "genre" concreto


Endpoints sobre series:

-router.get("/getAll", seriesControllers.getAllSeries);
sirve para obtener un listado de todas las series

-router.post("/newSerie", auth, seriesControllers.newSerie);
sirve para añadir una serie nueva a la base de datos, añadiendo los campos, "tittle", "year", "genre", "rating", "newChapSevenDays",  "accessTheatreCinema"; actualizando la base de datos con una serie nueva

-router.put("/updateSerie", auth, seriesControllers.updateSerie);
sirve para modificar los campos de una serie existente, a saber: "tittle", "year", "genre", "rating", "newChapSevenDays",  "accessTheatreCinema" .

-router.delete("/deleteSerie", auth, seriesControllers.deleteSerie);
sirve para borrar un serie, usando como campo requerido: "_id"

-router.post("/rating", seriesControllers.postSeriesByRating);
sirve para obtener las series con un campo "rating" concreto

-router.post("/id", seriesControllers.postSeriesById);
sirve para obtener las series con un campo "_id" concreto

-router.post("/tittle", seriesControllers.postSeriesByTittle);
sirve para obtener las series por un campo "tittle" concreto

-router.post("/genre", seriesControllers.postSeriesByGenre);
sirve para obtener las series por un campo "genre" concreto

-router.post("/newChapSevenDays", seriesControllers.postnewChapSevenDays);
sirve para obtener las series que vayan a tener un estreno en los próximos siete días, usando el campo "newChapSevenDays"

-router.post("/accessTheatreCinema", seriesControllers.postaccessTheatreCinema);
sirve para obtener las series que van a ser estrenadas en cines y teatros, usando el campo "accessTheatreCinema"


Endpoints sobre usuarios:

-router.get("/", auth, usersControllers.getAllUsers);
sirve para obtener todos los users usando el middleware auth con el protocolo de auth.js

-router.post("/", usersControllers.newUser);
sirve para crear un user nuevo mediante los campos "dni","name","surname","email","password"

-router.put("/update", auth, usersControllers.updateUser);
sirve para modificar los campos de un user :"name","surname","email","password"

-router.post("/login", usersControllers.loginUser);
sirve para acceder a la base de datos con user ya creado, mediante los campos: "email" y ´"password"

-router.post("/byName", auth, usersControllers.getUsersByName);
sirve para obtener el nombre de un usuario si es que existe en la base de datos mediante el campo: "name"


















Alberto López Nieva