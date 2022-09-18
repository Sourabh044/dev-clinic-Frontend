import React from 'react';
import Lsvg from './images/loginform.svg';
const LoginForm = () => {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between">
        <img className='w-50 h-50' src={Lsvg} alt="Login illustraition here!" />
    <div className="border"></div>
<form className='container text-start'>
  <div className=" mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Remember</label>
  </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
         <button type="submit" className="btn btn-primary me-md-2">Login</button>
        </div></form>
</div>
  )
}

export default LoginForm;
