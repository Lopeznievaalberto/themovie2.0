const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema ({
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
 

});

const movie = mongoose.model("movie", moviesSchema);
module.exports = movie;








