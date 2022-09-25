import React, { useContext, useState } from "react";
import UserContext from "../context/User/userContext";

const Otp = () => {

    const [otp , setOtp] = useState({otp:''});
    const {otpverify} = useContext(UserContext)

    const handleotpclick = (e) => {
        e.preventDefault();
        otpverify(otp)
    }

    const onChange  = (e) =>{
        setOtp({...otp, [e.target.name]: e.target.value})
    }

  return (
      <form onSubmit={handleotpclick} className="mt-5">
        <div className="mb-3">
            <div className="d-flex justify-content-center">
          <label htmlFor="otp" className="lead form-label">
            Otp: 
          </label>
          <input
            type="text"
            className="form-control mx-2 w-25"
            id="otp"
            aria-describedby="otpHelp"
            onChange={onChange}
            name ='otp'
          />
          </div>
          <div id="otpHelp" className="form-text">
            Check For OTP in your Email spam folder. Sometimes, it might be there.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Verify
        </button>
      </form>
  );
};

export default Otp;
