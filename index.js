
const express=require('express');
const app=express();
const dbconnect = require("./db/dbconnect");
const PORT = 5500;
const router = require('./router');

//Para poder usar json
app.use(express.json());
app.use(router);


dbconnect();
app.listen(PORT, () => console.log(`Node server running on http://localhost:${PORT}` ))