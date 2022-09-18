import React, { useContext } from "react";
import LoginSignup from "./LoginSignup";
import UserContext from "../context/User/userContext";
const Home = () => {
  const {login} = useContext(UserContext);
  return (
    <div>
      {!login && <LoginSignup />}
    </div>
  );
};

export default Home;
