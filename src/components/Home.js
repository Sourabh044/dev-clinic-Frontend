import React, { useContext } from "react";
import LoginSignup from "./LoginSignup";
import UserContext from "../context/User/userContext";
// import Carousel from "./Carous el";
const Home = () => {
  const {login} = useContext(UserContext);
  return (
    <div>
      {/* <Carousel/> */}
      <div className="container">
      <hr/>
      {!login?<LoginSignup />: <p>You are Logged in..</p>}
      <hr/>
      </div>
    </div>
  );
};

export default Home;
