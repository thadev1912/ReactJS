import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name:"auth", // tên của slice
    // giá trị khởi tạo
    initialState:{
        login:{
            user:null,            
            error:false,
        }
    },
    //reuducer
    reducers:{
       
        loginSuccess:(state,action)=>{
            state.login.user=action.payload; 
            state.login.error=false;
        },
        loginFail:(state)=>{
            state.login.error=true;
        },
        logoutSuccess:(state)=>{
            state.login.user=null
        },
        logoutFail:(state)=>{
            state.login.error=null
        }
    } 
});
export const {
    loginSuccess,
    loginFail,
    logoutSuccess,
    logoutFail,
}=authSlice.actions;
export default authSlice.reducer