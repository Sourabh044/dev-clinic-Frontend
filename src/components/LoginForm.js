import React, { useContext, useState } from "react";
import UserContext from "../context/User/userContext";
import Lsvg from "./images/loginform.svg";
const LoginForm = () => {
  const {auth} = useContext(UserContext);
  const [credentials, setCredentials] = useState({email:'', password:''});
  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    // TODO 
    await auth(credentials);
    console.log('logged in')

  };
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between">
      <img className="w-50 h-50" src={Lsvg} alt="Login illustraition here!" />
      <div className="border"></div>
      <form className="container text-start" onSubmit={handleLogin}>
        <div className=" mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            required
            value={credentials.email}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
          value={credentials.password}
            required
            type="password"
            name="password"
            className="form-control"
            id="password"
            onChange={onChange}
            autoComplete="on"
          />
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-primary me-md-2">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
