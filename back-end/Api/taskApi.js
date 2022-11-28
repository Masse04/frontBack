const {Router} = require('express') ;
const { findOne } = require('../modules/Tasks');
const taskModel = require('../modules/Tasks');
const Task = Router() ;
Task.post('/addTask', async (req,res) => {
    const tache = req.body ;
    try {
        let result = await taskModel.findOne({task : tache.task,user : tache.user}) ;
        if (result) {
            res.send ('Cette tache existe deja') ;
            console.log('Cette tache existe deja') ;
        }else {
            let newTask = new taskModel(tache) ;
            let saved = await newTask.save() ;
            if(saved) {
                const add = await taskModel.find({user: tache.user})
                res.send(add) ;
                console.log('task inserted') ;
            }else {
                res.send('task not inserted') ;
                console.log('task not inserted') ;
            }
        }
    } catch (error) {
        console.log(error.message)
    }
})
Task.get('/listenTask/:user', async (req,res) => {
    const tache = req.params.user
    try {
        let result = await taskModel.find({user : tache}) ;
        res.send (result)
        console.log(result,tache) ;
    } catch (error) {
        console.log(error.message) ;
    }
})
/*
Task.get('/filterTask/:task', async (req,res) => {
    const data = req.params;
    console.log(data)
    try {
        let result = await taskModel.find({task : task.includes(data)})
    } catch (error) {
        console.error(error)
    }
})
Task.get('/userTask/:user',(req,res) => {
    const data = req.params.user
    const list1 = list.filter(el => el.user === data)
    res.send(list1)
})
*/
Task.delete('/deleteTask/:task/:id', async (req,res) => {
    const task = req.params.task
    const id = req.params.id
    try {
        let result = await taskModel.findOne({task : task, user : id}) ;
        if (result) {
        let removed = await taskModel.findOneAndRemove({task : task,user : id});
        const user_id = await taskModel.find({user : id}) ;
        res.send(user_id) ;
        console.log(removed) ;
        }
        else {
            res.send('cette tache n\'existe pas') ;
            console.log('cette tache n\'existe pas')
        }
    } catch (error) {
        console.log(error.message) ;
    }
})
module.exports = Task ;