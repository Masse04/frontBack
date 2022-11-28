import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit" ;
export const getUser = createAsyncThunk('Users/getUser', async ({user}) => {
    return axios
        .post('http://localhost:3002/Users/logIn', user)
        .then(res => {return res.data})
        .catch(err => {return err.data.message})
})
const userSlice = createSlice({
    name : 'Users',
    initialState : {
        user : {} ,
        status : '' ,
        erreur : ''
    },
    reducers : {
        /* on doit déloguer le user et supprimer toutes ses infos*/
        logOut () {
            localStorage.clear() ;
        }
    },
    extraReducers : {
        [getUser.fulfilled] : (state,action) => {
            if (typeof action.payload === 'string'){
                state.erreur = action.payload
                console.log(state.erreur)
                }
            else {
                state.user = action.payload ;
                state.status = 'Succés' ;
                console.log(state.status)
                localStorage.setItem('user',JSON.stringify(action.payload))
                console.log(localStorage.user)
                
                }
        },
        [getUser.rejected] : (state,action) => {
            state.erreur = action.payload ;
            state.status = 'Rejeté' ;
        },
        [getUser.pending] : (state) => {
            state.status = 'en cours ...' ;
        }
    }
})
export const {logOut} = userSlice.actions ;
export default userSlice.reducer ;