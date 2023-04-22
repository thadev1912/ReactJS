import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
//add reducer vào store để lưu trữ
export default configureStore({
    reducer:{
    auth:authReducer,  // add reducer vào 
    },
}); 
