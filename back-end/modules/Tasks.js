const mongoose = require ('mongoose') ;
const Tasks = mongoose.Schema({
    task : {
        type : String,
        require : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Users' ,
        require : true
    }
})
const taskModel = mongoose.model('usersTasks',Tasks) ;
module.exports = taskModel ;