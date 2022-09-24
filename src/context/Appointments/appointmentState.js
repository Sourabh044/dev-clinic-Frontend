import { React ,useState } from "react";
import AppointmentContext from "./appointmentContext";


const AppointmentState = (props) =>{

    const [appointments, setAppointments] = useState([])
    const [acount, setAcount] = useState(0)

    const getappointments = async () =>{
        const response = await fetch(`http://127.0.0.1:8000/appointments/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization":
          `Bearer ${localStorage.getItem('token')}`,
        },
    });
    const json = await response.json();
    // console.log(Object.keys(json)); 
    // console.log(json.appointments); 
    setAppointments(json.appointments);
    setAcount(json.count);
    };
    return(
    <AppointmentContext.Provider value={{getappointments,appointments,acount}}>
        {props.children}
    </AppointmentContext.Provider>)


}

export default AppointmentState;