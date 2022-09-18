import React from 'react';
import LoginForm from './LoginForm';
import Signupform from './Signupform';

const LoginSignup = () => {
  return (
    <div className="container my-2">
<div className="justify-content-center">
<div className="container ">
    <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Login</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Signup</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="container tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0"><LoginForm/></div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0"><Signupform/></div>
</div>
</div>
</div>
</div>
  )
}

export default LoginSignup
