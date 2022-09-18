import { React ,useState } from "react";
import AppointmentContext from "./appointmentContext";


const AppointmentState = (props) =>{

    const [appointments, setAppointments] = useState([])

    const getappointments = async () =>{
        const response = await fetch(`http://127.0.0.1:8000/appointments/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization":
          "token 8446cca7ffcd2619d92976656a86c74c2c2e4d96",
        },
    });
    const json = await response.json();
    // console.log(Object.keys(json)); 
    // console.log(json.appointments); 
    setAppointments(json.appointments);

    };
    return(
    <AppointmentContext.Provider value={{getappointments,appointments}}>
        {props.children}
    </AppointmentContext.Provider>)


}

export default AppointmentState;