const cors= require ('cors');
//const dotenv=require('dotenv').config()
const express=require('express');
//const auth = require('../config/auth');
const app=express();
const dbconnect = require("./db/dbconnect");
const PORT =3000;
const router = require('./router');
app.use(cors({
    origin: '*'
}));
//Configuración CORS
let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};
//Para poder usar json
app.use(cors(corsOptions));
app.use(express.json());
app.use(router);


dbconnect();

exports.server =app.listen(PORT, () => console.log(`Node server running on http://localhost:${PORT}` ))
