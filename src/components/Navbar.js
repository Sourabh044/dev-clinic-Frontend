import React, { useContext } from 'react';
import { Link, Navigate, useLocation } from "react-router-dom";
import UserContext from '../context/User/userContext';
const Navbar = () => {
  const {login, logout} = useContext(UserContext);
  const handleLogout = (e) =>{
    e.preventDefault();
    localStorage.removeItem('token');
    <Navigate to='/home'/>
    logout();
  }

  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
  <div className="container">
  <Link className="navbar-brand" to="/">
  <i className="bi bi-hospital"></i>Dev Clinic</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link  className={`nav-link ${useLocation.pathname==='/home'?'active':''}`} aria-current="page" to="/home">Home</Link>
        </li>
      {login &&
      <><li className="nav-item">
          <Link  className={`nav-link ${useLocation.pathname==='/patients'?'active':''}`} to="/patients">Patients</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${useLocation.pathname==='/appointments'?'active':''}`} to="/appointments">Appointments</Link>
        </li></>
        }
        <li className="nav-item">
          <Link  className={`nav-link ${useLocation.pathname==='/about-us'?'active':''}`} to="/about-us">About</Link>
        </li>
      </ul>
      {login?
            <Link type="button" className="btn btn-outline-success p-2" onClick={handleLogout}>Logout</Link>:
            <Link type="button" className="btn btn-outline-success p-2" to='/home'>Login</Link> 
}
       </div>
  </div>
</nav>
  )
}

export default Navbar
