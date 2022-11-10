import {createSlice,createAsyncThunk} from '@reduxjs/toolkit' ;
import axios from 'axios' ;
export const getTasks = createAsyncThunk('Tasks/getTasks',async () => {
    return axios
    .get('http://localhost:3002/listenTask')
    .then(res => res.data)
    .catch(err => err.data.message)
})
export const addTasks = createAsyncThunk('Tasks/addTasks',async ({task}) => {
    return axios
    .post('http://localhost:3002/updateTask',task)
    .then(res => res.data)
    .catch(err => err.data.message)
})
export const delTasks = createAsyncThunk('Tasks/delTasks',async ({task})=> {
    return axios
    .delete(`http://localhost:3002/deleteTask/${task}`)
    .then(res => res.data)
    .catch(err => err.data.message)
})
const taskSlice = createSlice({
    name : 'Tasks' ,
    initialState : {
        list : [] ,
        status : "" ,
        erreur : "" 
    },
    reducers : {} ,
    extraReducers : {
        [getTasks.fulfilled] : (state , action) => {
            state.list = action.payload ;
            state.status = 'Success' ;
        },
        [getTasks.rejected] : (state , action) => {
            state.erreur = action.payload ;
            state.status = 'rejeté' ;
        },
        [getTasks.pending] : (state) => {
            state.status = 'en cours ...'
        },
        [addTasks.fulfilled] : (state , action) => {
            state.list = action.payload ;
            state.status = 'Success' ;
        },
        [addTasks.rejected] : (state , action) => {
            state.erreur = action.payload ;
            state.status = 'rejeté' ;
        },
        [addTasks.pending] : (state) => {
            state.status = 'en cours ...'
        },
        [delTasks.fulfilled] : (state , action) => {
            state.list = action.payload ;
            state.status = 'Success' ;
        },
        [delTasks.rejected] : (state , action) => {
            state.erreur = action.payload ;
            state.status = 'rejeté' ;
        },
        [delTasks.pending] : (state) => {
            state.status = 'en cours ...'
        }
    }
})
export default taskSlice.reducer ;