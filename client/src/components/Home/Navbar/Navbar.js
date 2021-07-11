import React from "react";
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import "../Navbar/Navbar.css";
import { logoutAction } from "../../reducers/action/AppoinmentAction";
const Navbar = () => {
  const dispatch=useDispatch()
  const logAuth=useSelector(state=>state.login.isAuth)
  const regAuth=useSelector(state=>state.register.isAuth)
  
  const beforeLogIn=(<ul className="navbar-nav ml-auto">
  <li className="nav-item active">
    <Link className="nav-link mr-5 text-white" to="/">
      Home
    </Link>
  </li>
  <li className="nav-item">
    <a className="nav-link mr-5 text-white" href="#services">
      Dental Services
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link mr-5 text-white" href="#about">
      About Us
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link mr-5 text-white" href="#contuct">
      Contact Us
    </a>
  </li>
  <li className="nav-item">
    <Link className="nav-link mr-5 text-white" to="login">
     Login
    </Link>
  </li>
</ul>)

const afterLogin=(<ul className="navbar-nav ml-auto">
<li className="nav-item active">
    <Link className="nav-link mr-5 text-white" to="/">
      Home
    </Link>
  </li>
  <li className="nav-item">
    <a className="nav-link mr-5 text-white" href="#services">
      Dental Services
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link mr-5 text-white" href="#about">
      About Us
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link mr-5 text-white" href="#contuct">
      Contact Us
    </a>
  </li>
<li className="nav-item">
  <Link className="nav-link mr-5 text-white" to="dashboard">
    Dasboard
  </Link>
</li>
<li className="nav-item">
  <Link onClick={()=>dispatch(logoutAction())} className="nav-link mr-5 text-white" to="/">
   Logout
  </Link>
</li>
</ul>)

  return (
    <nav style={{backgroundColor:'green'}} className="navbar navbar-expand-lg navbar-light fixed-top">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {
          logAuth ||regAuth ? afterLogin:beforeLogIn
        }
      </div>
    </nav>
  );
};

export default Navbar;
