import { configureStore } from "@reduxjs/toolkit";
import taskSlice from '../Reducer/TaskReducer' ;
import userSlice from '../Reducer/UserReducer' ; 
const Store = configureStore({
    reducer : {
        Tasks : taskSlice ,
        Users : userSlice
    }
})
export default Store ;