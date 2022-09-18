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
        `token ${localStorage.getItem('token')}`,
      },
    });
    const json = await response.json();
    setPatients(json);
    };

    return(
    <PatientContext.Provider value={{getpatients, patients}}>
        {props.children}
    </PatientContext.Provider>
    );

};

export default PatientState;