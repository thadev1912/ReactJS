import React,{useReducer} from "react";
// Đối với useSate
//1. InitSate
//2. Action


// Đối với Reducer
//1. InitSate
//2. Action
//3. Reducer
//4. Dispatch
const Reducer1 =() =>{
    // InitSate
    const InitSate=0;
    // Action
    const handleUp ='up';
    const handleDown='down';
    // Reducer ==> phải nghỉ tới switch
    const reducer=(state,action)=>
    {
       switch(action) {
        case handleUp:
            return state+1;
            break
        case handleDown:
            return state-1;
            break;
        default:
            throw new Error('invalid action');
       }
    }
    const [count,dispatch]=useReducer(reducer,InitSate)
  return (
    <>
    <div><h1>Giá Trị Hiện Tại:{count} </h1>
      <div>
        <button className="btn btn-danger" onClick={()=>dispatch(handleUp)} >Tăng</button>
        <button className="btn btn-primary" onClick={()=>dispatch(handleDown)}>Giảm</button>
        </div>
       
       
       
    </div>
    </>
  )
}
export default  Reducer1
