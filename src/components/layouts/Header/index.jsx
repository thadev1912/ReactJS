import React from "react";
import { Link} from 'react-router-dom';
import Logout from "../../auth/logout";
import { useSelector } from "react-redux";
const Header =() =>{
 
  const User=useSelector((state)=>state.auth.login.user?.data.username);  //? để tránh trường hợp khi accessToken null
  console.log('tên user là',User);
        return (
            <>
             <nav className="navbar navbar-expand-lg navbar-light bg-danger text-white">
  <div className="container">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
        <li className="nav-item">
        <Link className="navbar-brand text-white" to="/sinhvien">Sinh Viên</Link>
        </li>
        <li className="nav-item">
        <Link className="navbar-brand text-white" to="/phongban">Phòng Ban</Link>
        </li>
        <li className="nav-item">
        <Link className="navbar-brand text-white" to="/chucvu">Chức Vụ</Link>
        </li>
        <li className="nav-item">
        <Link className="navbar-brand text-white" to="/redux">Redux</Link>
        </li>
        
      </ul>
      {/* <li className="nav-item nav-link">
      <Link className="navbar-brand" to="/login">Đăng nhập</Link>
      </li> */}
    
       <li className="nav-item nav-link text-white">
       {User ?  <Logout  user={User} />  :  <Link className="navbar-brand" to="/login">Đăng nhập</Link>
      }
      
        </li>
    </div>
  </div>
</nav>

    
            </>
        )
    }
  
export default Header