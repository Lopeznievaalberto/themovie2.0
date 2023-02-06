const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema ({
    poster_path: {
        type: String,
        required: true
    },
    tittle: {
        type: String,
        required: true
    },
    year : {
        type: Number  
    },
    genre:{
        type: String
    },
    rating : {
        type: Number
    },
    overview: {
        type: String,
        required: true
    }
});
 

const movie = mongoose.model("movie", moviesSchema);
module.exports = movie;








