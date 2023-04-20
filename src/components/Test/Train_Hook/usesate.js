import React,{useReducer, useState} from "react";
// Đối với useSate
//1. InitSate
//2. Action
const Reducer1 =() =>{
    // InitSate
    const [count, setcount]=useState(0);
    // Action
    const handleUp =()=>{
       setcount(count+1);
    }
    const handleDown =()=>{
        setcount(count-1);
     }
  return (
    <>
    <div><h1>Giá Trị Hiện Tại:  {count}</h1>
      <div>
        <button className="btn btn-danger" onClick={handleUp}>Tăng</button>
        <button className="btn btn-primary" onClick={handleDown}>Giảm</button>
        </div>
       
       
       
    </div>
    </>
  )
}
export default  Reducer1
