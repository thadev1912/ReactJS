import React from "react";
import { legacy_createStore as createStore } from 'redux'; //cách import cho phiên bản cũ ==> nên dùng tookitg
const Redux =()=>{
 //1. Initsate
 //2. Ation
 //3. Reducer
 //4. Store   <=> const store =createStore(Reducer)
                /// --->store.subscribe(() => console.log(store.getState()))
                /// --->store.dispatch(action)
//5 . Dispatch(ation) để truyền payload
  // Khởi tạo State
 const initSate =[];
 
        
 
//Action
const INPUT_DATA ='input_data';
const ADD_DATA ='add_data';
const input_Data =(payload)=>{
    return {
        type:INPUT_DATA,
        payload
    }
}
const add_Data =(payload)=>{
    return {
        type:ADD_DATA,
        payload
    }
}
//console.log(add_Data('payload'));


 //Reducer

 const reducer=(state = initSate,action)=>
 {
   console.log(action); 
   switch(action.type) {
    case INPUT_DATA:
        return {
            ...state,
        }
        case ADD_DATA:
           const list_new=[...state.list_job];
            list_new.push(action.payload);
            return {
                ...state,list_job:list_new
            } 
    default:
    new Error('Invalid action');
   }

 }
 //Dispatch
 const handleChange =(e)=>{
    store.dispatch(input_Data(e))
 }
 const handleAdd =()=>{
 
   
    store.dispatch(add_Data())
 }
 //Store
 const store =createStore(reducer);
 store.subscribe(() => console.log(store.getState()))
 return(
    <>
   <div style={{padding:'0 20px'}}><h1>To Do List With Redux </h1>
   <input   placeholder="Nhập danh sách" onChange={(e)=>{handleChange(e.target.value)}} className="form-control"></input>
   <button className="btn btn-danger mt-3" onClick={{handleAdd}}>Thêm Vào</button>
       <ul>
       
         
       </ul>
       
       
    </div>
    </>
)

}

export default Redux