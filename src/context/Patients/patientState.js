import {React, useState } from "react";
import PatientContext from "./patientContext";

const PatientState = (props) =>{
    const [patients , setPatients] = useState([]);

    const getpatients = async () =>{
        const response = await fetch(`http://127.0.0.1:8000/patients/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization":
          "token 8446cca7ffcd2619d92976656a86c74c2c2e4d96",
      },
    });
    const json = await response.json();
    setPatients(json);
    console.log(json); 
    };

    return(
    <PatientContext.Provider value={{getpatients, patients}}>
        {props.children}
    </PatientContext.Provider>
    );

};

export default PatientState;