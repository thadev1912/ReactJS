import React from "react";
import { legacy_createStore as createStore } from 'redux'; //cách import cho phiên bản cũ ==> nên dùng tookit
const Redux =()=>{
 //1. Initsate
 //2. Ation
 //3. Reducer
 //4. Store   <=> const store =createStore(Reducer)
                /// --->store.subscribe(() => console.log(store.getState()))
                /// --->store.dispatch(action)
//5 . Dispatch(ation) để truyền payload
  // Khởi tạo State
 const initSate =0;

 //Reducer
 const reducer=(state,action)=>
 {

 }
 //Store
 const store =createStore(reducer);
 return(
    <>
   <div style={{padding:'0 20px'}}><h1>To Do List With Redux </h1>
   <input   placeholder="Nhập danh sách"  className="form-control"></input>
   <button className="btn btn-danger mt-3" >Thêm Vào</button>
       <ul>
       
         
       </ul>
       
       
    </div>
    </>
)
}

export default Redux