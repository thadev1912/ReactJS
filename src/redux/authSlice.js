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
        logout:(state)=>{
            state.login.user=null
        }
    } 
});
export const {
    loginSuccess,
    loginFail,
    logout,
}=authSlice.actions;
export default authSlice.reducer