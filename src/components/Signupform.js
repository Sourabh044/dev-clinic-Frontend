import React, { useContext, useState } from "react";
import UserContext from "../context/User/userContext";
import Ssvg from './images/signupform.svg'
import Spinner from "./Spinner";
const Signupform = (props) => {
  const [credentials, setCredentials] = useState({semail:'', spassword: '', smobile:'', sname:''})
  const {signup} = useContext(UserContext);
  const onChange = (e) =>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  };
  const [loading, setLoading] = useState(false);

  const handleSignup = async (event) =>{
    event.preventDefault();
    setLoading(true);
    await signup(credentials);
    setLoading(false);
  }
  
  return (loading?<Spinner text = 'Sending OTP to verify Email...'/>:
      <div className="d-flex flex-column flex-lg-row justify-content-between">
      <img
        className="w-50 col"
        src={Ssvg}
        alt="Login illustraition here!"
      />
          <div className="border"></div> <form onSubmit={handleSignup} className="container text-start col">
        <div className=" mb-3">
          <label htmlFor="sname" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="sname"
            aria-describedby="emailHelp"
            onChange={onChange}
            name='sname'
            value={credentials.sname}
          />
          <label htmlFor="semail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="semail"
            aria-describedby="emailHelp"
            onChange={onChange}
            name='semail'
            value={credentials.semail}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your Email with anyone else.
          </div>
        </div>
        <div className=" mb-3">
          <label htmlFor="smobile" className="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            className="form-control"
            id="smobile"
            aria-describedby="emailHelp"
            onChange={onChange}
            name='smobile'
            value={credentials.smobile}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your Phone with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="spassword" className="form-label">
            Password
          </label>
          <input
          name="spassword"
            type="spassword"
            onChange={onChange}
            className="form-control"
            id="spassword"
            value={credentials.spassword}
            autoComplete="on"
          />
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
         <button type="submit" className="btn btn-primary me-md-2">Signup</button>
        </div>
      </form>
      </div>
  );
};

export default Signupform;
