import React, { useState } from "react";
import UserContext from "./userContext";
const UserState = (props) =>{

    const [login,setLogin] = useState(false);
    
    const auth = async (credentials) =>{
        const response = await fetch(`http://127.0.0.1:8000/token/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username: credentials.email, password: credentials.password }),
    });
    const json = await response.json();
    // console.log(Object.keys(json)); 
    if (!json.token){
      return alert('Enter Valid Credentials')
    }
    // console.log(json);
    localStorage.setItem('token',json.token)
    setLogin(true)
    console.log(localStorage.getItem('token'))
    }

    const signup = async (credentials) =>{
        const response = await fetch(`http://127.0.0.1:8000/signup/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: credentials.semail,mobile: credentials.smobile, password: credentials.spassword }),
    });

    const json = await response.json();
    console.log(json)
    }
    

    const logout = () =>{
        localStorage.removeItem('token')
        setLogin(false)
    }


    return (
        <UserContext.Provider value={{auth, login, signup, logout}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;