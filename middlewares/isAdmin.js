const  User  = require('../models/user.js');

module.exports = (req, res, next) => {
    let _id = req.body._id;

    User.find({
         _id : _id 
    }).then(foundUser => {
        if(foundUser[0].rol == "admin"){
            next();
        }else {
            res.send(`Acceso no autorizado`)
        }
    }).catch(error => {
        console.log(error)
        res.send(`Introduce user _id`)
    })
};