import React,{useReducer,useRef} from "react";
// Đối với useSate
//1. InitSate
//2. Action


// Đối với Reducer
//1. InitSate
//2. Action
//3. Reducer
//4. Dispatch
const Reducer2 =() =>{
  const focus_input =useRef(); // dùng ref để truy xuất đến phần tử Dom
    //InitSate
    const InitSate={
      language:'',
      list_language:[]
    }
    //Action
    const INPUT_DATA ='input_data';
    const ADD_DATA='add_data';
    const DELETE_DATA='delelte_data';
    //how to get payload <=> giá trị nó mang theo để reducer nó update lại
    const input_Data =(payload) =>{
      return {
        type:INPUT_DATA,
        payload}
      
    }
    const add_Data =(payload)=>{
      return {
        type:ADD_DATA,
        payload
      }
    }
    const delete_Data =(payload)=>{
      return {
        type:DELETE_DATA,
        payload
      }
    }
    //console.log(input_Data('Lập trình'));
    //Reducer
    const Reducer=(state,action)=>{
      console.log('Action',action);
      console.log('PrevSate',state);      
     switch(action.type)
     {
      case INPUT_DATA:
        return {
          ...state,
          language:action.payload
        }
        break
        case ADD_DATA:        
          const new_list=[...state.list_language];
          new_list.push(action.payload);
          return {
            ...state,list_language:new_list
          }
          break
          case DELETE_DATA:
            const old_list=[...state.list_language];
            old_list.splice(action.payload,1);
        return {
              ...state,list_language:old_list
        }
        break
        default:
          throw new Error('Invalid action');
     }
    
     
    
     
    }
    //Dispatch
    const [state,dispatch]=useReducer(Reducer,InitSate);
    const {language,list_language}=state;
    const handleAdd=()=>
    {
      dispatch(add_Data(language));
      dispatch(input_Data(''));
      focus_input.current.focus();
    }
    const hanldeDelete=()=>
    {
      dispatch(delete_Data(language))
    }
  return (
    <>
   
    <div style={{padding:'0 20px'}}><h1>To Do List </h1>
   <input  ref={focus_input} placeholder="Nhập danh sách" value={language} onChange={(e)=>{dispatch(input_Data(e.target.value))}} className="form-control"></input>
   <button className="btn btn-danger mt-3" onClick={handleAdd}>Thêm Vào</button>
       <ul>
        {list_language.map((language,index)=>(
    <li className="nav-link" key={index}>{language}<span onClick={hanldeDelete}>&times;</span> </li>   
        ))}
         
       </ul>
       
       
    </div>
    </>
  )
}
export default  Reducer2
