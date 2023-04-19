import React from "react";
import { Link} from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (
            <>
             <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container">
    <Link className="navbar-brand" to="/login">Đăng nhập</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="navbar-brand" to="/sinhvien">Sinhvien</Link>
        </li>
        <li className="nav-item">
        <Link className="navbar-brand" to="/chucnang">Chức Năng</Link>
        </li>
        <li className="nav-item">
        <Link className="navbar-brand" to="/lienhe">Liên Hệ</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    
            </>
        )
    }
}
export default Header