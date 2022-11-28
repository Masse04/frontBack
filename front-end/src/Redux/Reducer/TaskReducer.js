import {createSlice,createAsyncThunk} from '@reduxjs/toolkit' ;
import axios from 'axios' ;
export const getTasks = createAsyncThunk('Tasks/getTasks', async ({id}) => {
    return axios
    .get(`http://localhost:3002/Task/listenTask/${id}`)
    .then(res => res.data)
    .catch(err => err.data.message)
})
export const addTasks = createAsyncThunk('Tasks/addTasks', async ({tache}) => {
    return axios
    .post('http://localhost:3002/Task/addTask',tache)
    .then(res => res.data)
    .catch(err => err.data.message)
})
export const delTasks = createAsyncThunk('Tasks/delTasks', async ({task,id})=> {
    return axios
    .delete(`http://localhost:3002/Task/deleteTask/${task}/${id}`)
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
    reducers : {
        filterTasks (state, action) {
            state.list = [...state.list.filter(el => el.task.includes(action.payload))]
        }
        } ,
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
        },
        /*
        [filterTasks.fulfilled] : (state,action) => {
            state.list = action.payload ;
            state.status = 'Success' ;
        },
        [filterTasks.rejected] : (state, action) => {
            state.erreur = action.payload ;
            state.status = 'Rejeté' ;
        },
        [filterTasks.pending] : (state) => {
            state.status = 'en cours ...' ;
        }*/
    }
})
export const {filterTasks} = taskSlice.actions ;
export default taskSlice.reducer ;