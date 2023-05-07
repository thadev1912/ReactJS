import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutFail, logoutSuccess } from "../../redux/authSlice";
import { useSelector } from "react-redux";
const Logout = (props) => {
    const Token=useSelector((state)=>state.auth.login.user?.token);  //? để tránh trường hợp khi accessToken null
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const {user}=props; 
    console.log('Props đăng nhập là',props);
   
  const handleLogout=async()=>{
    //alert(' muốn đăng xuất à');
    try{
        let res= await axios.delete('http://127.0.0.1:8000/api/thoat_api',
        {
          headers:{"Authorization": "Bearer "+Token+""}
        });
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