const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seriesSchema = new Schema ({
    poster_path: {
        type: String,
        required: true
    },
    tittle: {
        type: String,
        required: true
    },
    year : {
        type: Number,   
    },
    genre:{
        type: String,
    },
    rating: {
        type: Number,  
    },
    newChapSevenDays: {
        type: String,
    },
    accessTheatreCinema:{
        type: String,
    },
    overview: {
        type: String,
        required: true
    }
});

const serie = mongoose.model("serie", seriesSchema);
module.exports = serie;


   