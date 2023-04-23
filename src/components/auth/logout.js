import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutFail, logoutSuccess } from "../../redux/authSlice";

const Logout = (props) => {
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const {user}=props; 
    console.log('Props đăng nhập là',props);
   
  const handleLogout=async()=>{
    //alert(' muốn đăng xuất à');
    try{
        let res= await axios.get('http://localhost:8080/user/xulydangxuat');
        if(res.data)
        {
            
            
              dispatch(logoutSuccess());
              navigate('/login');
        }
        else
        {
            console.log('Đăng nhập thất bại');
            alert('Đăng nhập thất bại!!!');
        }
     }
     catch(err)
     {
        
        
        dispatch(logoutFail);
     }

  }
  return (
    <>
    <span className="" >Hi {user}</span>
    <button className='btn' onClick={handleLogout}>Đăng Xuất</button>
    </>
  )
}

export default Logout