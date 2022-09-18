import React, { useContext, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import UserContext from '../context/User/userContext';
const Navbar = () => {
  const {login, logout} = useContext(UserContext);
  const handleLogout = (e) =>{
    e.preventDefault();
    logout();
  }

  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 shadow">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">
  <i className="bi bi-hospital"></i>Dev Clinic</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className={`nav-link ${useLocation.pathname==='/home'?'active':''}`} active aria-current="page" to="/home">Home</Link>
        </li>
      {login &&
      <><li className="nav-item">
          <Link className={`nav-link ${useLocation.pathname==='/patients'?'active':''}`} to="/patients">Patients</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${useLocation.pathname==='/appointments'?'active':''}`} to="/appointments">Appointments</Link>
        </li></>
        }
        <li className="nav-item">
          <Link className={`nav-link ${useLocation.pathname==='/about-us'?'active':''}`} to="/about-us">About</Link>
        </li>
      </ul>
      {login?
            <button type="button" className="btn btn-outline-success p-2" onClick={handleLogout}>Logout</button>:
            <button type="button" className="btn btn-outline-success p-2">Login</button> 
}
       </div>
  </div>
</nav>
  )
}

export default Navbar
