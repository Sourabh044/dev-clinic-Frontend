import React, { useContext, useState } from "react";
import UserContext from "../context/User/userContext";
import Spinner from "./Spinner";

const Otp = (props) => {

    const [otp , setOtp] = useState({otp:''});
    const {otpverify} = useContext(UserContext)
    const [loading, setLoading] = useState(false);

    const handleotpclick = async (e) => {
        e.preventDefault();
        setLoading(true)
        await otpverify(otp)
        setLoading(false)
    }

    const onChange  = (e) =>{
        setOtp({...otp, [e.target.name]: e.target.value})
    }

  return (loading?<Spinner text='Please wait...'/>:
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
