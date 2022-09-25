import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Redirect  } from "react-router-dom";
import UserContext from "./userContext";
const UserState = (props) => {
  const [login, setLogin] = useState(false);
  const [isVerfied, setIsVerified] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState(false);
  const navigate = useNavigate();
  // User login function
  const auth = async (credentials) => {
    const response = await fetch(`http://127.0.0.1:8000/login/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    // console.log(Object.keys(json));
    console.log(json)
    if (!json.token) {
      return alert("Enter Valid Credentials");
    }
    if(!json.is_verified){
      alert('Please Verify Yourself')
      navigate('verify')
    }
    // console.log(json.token.access);
    // console.log(json.is_verified);
    // console.log(localStorage.getItem('token'))
    // console.log(localStorage.getItem('refresh'))

    localStorage.setItem("isVerified", json.is_verified);
    localStorage.setItem("token", json.token.access);
    localStorage.setItem("refresh", json.token.refresh);
    setIsVerified(json.is_verified);
    setLogin(true);
  };
  //  Refreshing user accesss token using the refresh token
  const refreshToken = async () => {
    const response = await fetch(`http://127.0.0.1:8000/profile/refresh/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: localStorage.getItem("refresh") }),
    });
    const json = await response.json();
    console.log(json);
    localStorage.setItem("token", json.access);
  };

  // Signup new user
  const signup = async (credentials) => {
    const response = await fetch(`http://127.0.0.1:8000/signup/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.semail,
        mobile: credentials.smobile,
        password: credentials.spassword,
        name: credentials.sname,
      }),
    });

    const json = await response.json();
    if (json.error) {
      return alert("an error ocured");
    }
    if (json.status === true) {
      localStorage.setItem("isVerified", json.is_verified);
      localStorage.setItem("token", json.token.access);
      console.log(localStorage.getItem("token"));
      localStorage.setItem("refresh", json.token.refresh);
      setIsVerified(json.is_verified);
      setVerifyOtp(true);
    }

    console.log(json);
  };
  //  Logout a user
  const logout = () => {
    localStorage.removeItem("token");
    setLogin(false);
  };
  // Verifying the otp of the user
  const otpverify = async (otp) => {
    const response = await fetch(`http://127.0.0.1:8000/login/verify/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ otp: otp }),
    });
    const json = await response.json();
    console.log(json);
    if (json.error) {
      if (json.error.code === "token_not_valid") {
        refreshToken();
        otpverify(otp);
      }
    } else if(json.info){
      return alert(json.info)
    }
    else if (json.status === false) {
      return alert("invalid otp");
    } else if (json.status === true) {
      setIsVerified(true);
      setVerifyOtp(true);
      setLogin(true);
      alert('Verifed Created User!')
      return navigate('/home')      
      // window.location.reload(false);
    }
  };
  //  check if user is logged in or not
  const checklogin = () => {
    if (!sessionStorage.getItem("token")) {
      return setLogin(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        auth,
        login,
        signup,
        logout,
        checklogin,
        setVerifyOtp,
        verifyOtp,
        otpverify,
        isVerfied,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
