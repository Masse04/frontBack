import { configureStore } from "@reduxjs/toolkit";
import taskSlice from '../Reducer/Reducer'
const Store = configureStore({
    reducer : {
        Tasks : taskSlice 
    }
})
export default Store ;