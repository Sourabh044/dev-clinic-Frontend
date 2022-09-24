import {React, useState } from "react";
import PatientContext from "./patientContext";

const PatientState = (props) =>{
    const [patients , setPatients] = useState([]);
    const [pcount , setPcount] = useState(0);

    const getpatients = async () =>{
        const response = await fetch(`http://127.0.0.1:8000/patients/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization":
        `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const json = await response.json();
    setPatients(json.Patients);
    setPcount(json.count);
    };



    const newpatient = async(pdata) =>{
      const response = await fetch(`http://127.0.0.1:8000/patients/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization":
          `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({email: pdata.email,phone: pdata.mobile, gender: pdata.gender,name:pdata.name }),
      });

      const json = await response.json();
      if (!json.id){
        return alert('Enter Valid Data!')
      }
      console.log(json);
      getpatients();
      props.close();
    }
    

    return(
      <PatientContext.Provider value={{getpatients, patients, newpatient,pcount}}>
          {props.children}
      </PatientContext.Provider>
      );
};

export default PatientState;