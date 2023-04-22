import React, {useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFail, loginSuccess } from "../../redux/authSlice";
const Login = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [login, setlogin] = useState({
        username: '',
        password: '',
    })
 
    const hanldechangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setlogin((prev) => {
            return { ...prev, [name]: value }
        })
       
    }
    console.log('giá trị nhập vào là',login);
    const handleLogin=async()=>{
        
         try{
            let res= await axios.post('http://localhost:8080/user/xulydangnhap',login);
            if(res.data)
            {
                console.log('Xin chào',res.data.data.username);
                 alert('Đăng nhập thành công!!!');
                  dispatch(loginSuccess(res.data));
                  navigate('/sinhvien');
            }
            else
            {
                console.log('Đăng nhập thất bại');
                alert('Đăng nhập thất bại!!!');
            }
         }
         catch(err)
         {
            
            
            dispatch(loginFail);
         }
        // console.log('giá trị gửi lên server',data);
        

         
    }
    const handleLogout=async()=>{
        alert('Đăng xuất thành công!!!'); 
        localStorage.removeItem('token');  
        navigate('/login');   
    }
    return (
        <>

            <p className="algin-center text-danger mt-3">ĐĂNG NHẬP</p>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Tài Khoản</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="username" onChange={hanldechangeInput} aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Mật Khẩu</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={hanldechangeInput}></input>
            </div>
            <div>
                <button type="submit" className="btn btn-danger" onClick={handleLogin}>Đăng Nhập</button>
                <button type="submit" className="btn btn-primary"onClick={handleLogout}>Thoát</button>
            </div>
        </>
    )
}
export default Login
