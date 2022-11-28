const mongoose = require('mongoose') ;

const User = mongoose.Schema({
    nom : {
        type : String 
    },
    prenom : {
        type : String
    },
    username : {
        type : String,
        require : true
    },
    email : {
        type : String
    },
    password : {
        type : String ,
        require : true
    }
})
const userModel = mongoose.model('users',User) ;
module.exports = userModel ; 