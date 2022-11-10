const express = require('express') ;
const cors = require('cors') ;
const app = express() ;
app.use(cors()) ;
app.use(express.json()) ;
let list = [
    {
        task : 'create project',
        user : 'user1'
    },
    {   task : 'create file',
        user : 'user2'
    },
    {   task : 'writing',
        user : 'user2'
    }
]
app.listen(3002,()=> console.log('server is running on port 3002...')) ;
app.get('/listenTask',(req,res) => {
    res.send(list)
})
app.get('/filterTask',(req,res) => {
    const data = req.query.task ;
    list1 = list.filter(el => el.task.includes(data)) ;
    res.send(list1) ;
})
app.get('/userTask/:user',(req,res) => {
    const data = req.params.user
    const list1 = list.filter(el => el.user === data)
    res.send(list1)
})
app.post('/updateTask',(req,res) => {
    const tache = req.body ;
    list.push(tache);
    res.send(list);
})
app.delete('/deleteTask/:task',(req,res) => {
    const data = req.params.task
    list = list.filter(el => el.task !== data) 
    res.send(list)
})