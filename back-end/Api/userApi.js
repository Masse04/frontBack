const {Router} = require('express') ;
const userModel = require('../modules/Users');
const Users = Router() ;
Users.post('/signIn', async (req,res) => {
let user = req.body ;
try {
    let result = await userModel.findOne({username : user.username}) ;
    if (result){
        res.send('Ce nom d\'utilisateur existe') ;
        console.log('Ce nom d\'utilisateur existe') ;
    }else {
        let newUser = new userModel(user) ;
        const saved = await newUser.save() ;
        if(saved) {
            res.send('user inserted') ;
            console.log('user inserted') ;
        }else {
            res.send('user not inserted') ;
            console.log('user not inserted') ;
        }
    }
} catch (error) {console.log(error.message)
} 
})
Users.post('/logIn' , async (req,res) => {
    let user = req.body ;
    try {
        let result = await userModel.findOne({username : user.username, password : user.password}) ;
        if (!result){
            res.send('Cet utilisateur n\'existe pas') ;
            console.log('Cet utilisateur n\'existe pas') ;
        }else {
                res.send(result) ;
                console.log('true')
            }
    }catch(error) {console.log(error.message)}
})
module.exports = Users ;