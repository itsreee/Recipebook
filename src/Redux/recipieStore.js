import {configureStore} from "@reduxjs/toolkit";
import recipieSlice from "./Slices/recipieSlice";
const recipieStore = configureStore({
    reducer:{
        recipieReducer : recipieSlice
    }
})
export default recipieStore