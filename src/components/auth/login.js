import React, {useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate=useNavigate();
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
         
        // console.log('giá trị gửi lên server',data);
        let res= await axios.post('http://localhost:8080/user/xulydangnhap',login);
         console.log(res.data.token);               
         if(res.data.status ===200)
         {
            alert('Đăng nhập thành công!!!'); 
            localStorage.setItem('token',res.data.token);        
            navigate('/sinhvien');
         }
         else
         {
           alert('Vui lòng kiểm tra lại tài khoản hoặc mật khẩu');
         }

         
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
