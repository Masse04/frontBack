const express = require('express') ;
const cors = require('cors') ;
const mongoose = require("mongoose")
const app = express() ;
const Users = require('./Api/userApi') ;
const Task = require('./Api/taskApi') ;
app.use(cors()) ;
app.use(express.json()) ;
app.listen(3002,()=> console.log('server is running on port 3002...')) ;
mongoose.connect("mongodb://127.0.0.1:27017/Todos",() => console.log('connected'))
app.use('/Users', Users) ;
app.use('/Task', Task) ;



