import React from "react";
import Ssvg from './images/signupform.svg'
const Signupform = () => {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between">
      <img
        className="w-50 col"
        src={Ssvg}
        alt="Login illustraition here!"
      />
          <div className="border"></div>
      <form className="container text-start col">
        <div className=" mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your Email with anyone else.
          </div>
        </div>
        <div className=" mb-3">
          <label for="mobile" className="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            className="form-control"
            id="mobile"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your Phone with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
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
