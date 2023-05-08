import React from 'react'
import './templete.scss';
const Templete = () => {
  return (
    <div>
    <header>
    <h2 className="logo"></h2>
    <nav className="navigation">
        <a href="http://">Home</a>
        <a href="http://">Sinhvien</a>
        <a href="http://">Chức Vụ</a>
        <a href="http://">Phòng Ban</a>
        <button className='btnLogin' type="submit">Đăng nhập</button>
    </nav>
    </header>
    <div className="warpper">
        <div className="box-login">
        <h5>ĐĂNG NHẬP THÔNG TIN</h5>
        <div className="input-box">
            <input type="text" />
            <label>Username</label>
        </div>
        <div className="input-box" >
            <input type="password"/>
            <label>Password</label>
        </div>
        <div className="input-box" >
            <input type="checkbox"/>
            <label>Remmember</label>
        </div>
        <button className='btn_Login' type="submit">Đăng nhập</button>
    </div>
    </div>
    </div>
  )
}

export default Templete